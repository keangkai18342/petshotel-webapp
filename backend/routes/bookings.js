var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');


var Schema = require("mongoose").Schema;
const userSchema = Schema({
    onwer: String,
    petsname: String,
    fristday: String,
    lastday: String,
    detail: String,
    status: String
},{
    collection: 'bookings'
});

let Bookings 
try {
    Bookings = mongoose.model('bookings')
} catch (error){
    Bookings = mongoose.model('bookings', userSchema);
}

const addbookings = (bookingsData) => {
    return new Promise ((resolve,reject) => {
        var new_bookings = new Bookings(
            bookingsData
        );
        console.log(new_bookings)
        new_bookings.save((err,data) => {
            if(err){
                reject(new Error('Cannot insert Pets to DB!'));
            }else{
                resolve({message: 'Bookings successfully'});
            }
        });
    });
}


router.route('/addbookings').post( async (req,res) => {
    console.log(req.body)
    addbookings(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
    })
});


const getBookings = () => {
    console.log("123")
    return new Promise ((resolve, reject) => {
        Bookings.find({},(err,data)=>{
            if(err){
                reject(new Error('Cannot get Bookings!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get Bookings!'));
                }
            }
        })
    });
}


router.route('/getBookings').get( async (req,res) => {
    getBookings(req.body).then(result => {
     console.log(result);
     res.status(200).json(result);
 })
 .catch(err => {
     console.log(err);
 })
     
});

router.delete('/deletee/:id',function(req,res){
    var id = req.params.id;
    Bookings.findOneAndRemove({_id: id}, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log("Delete "+id)
        return res.status(200).json({message: 'Deletesuccessfully'});
    })
});

router.put('/update/:id',function(req,res){
var id = req.params.id;
Pets.findOne({_id: id}, function(err, foundObjects){
    if(err){
        console.log(err);
        res.status(500).send();
    }else{
        if(!foundObjects){
            res.status(404).send();
        }else{
            if(req.body.status){
                foundObjects.status = req.body.status;
            }

            foundObjects.save(function(err,updatedObjects){
                if(err){
                    console.log(err);
                    res.status(500).send();
                } else {
                    res.send(updatedObjects);
                }
            })
        }
    }
})
})


module.exports = router