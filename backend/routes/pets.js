var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { nextTick, rawListeners } = require('process');

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    onwer: String,
    petsname: String,
    petsgender: String,
    type: String,
    file: String,
    img: String,
    info: String
},{
    collection: 'pets'
});

let Pets 
try {
    Pets = mongoose.model('pets')
} catch (error){
    Pets = mongoose.model('pets', userSchema);
}

const addPets = (petsData) => {
    return new Promise ((resolve,reject) => {
        var new_pets = new Pets(
            petsData
        );
        console.log(new_pets)
        new_pets.save((err,data) => {
            if(err){
                reject(new Error('Cannot insert Pets to DB!'));
            }else{
                resolve({message: 'Pets added successfully'});
            }
        });
    });
}

const getPets = () => {
    console.log("123")
    return new Promise ((resolve, reject) => {
        Pets.find({},(err,data)=>{
            if(err){
                reject(new Error('Cannot get pets!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get pets!'));
                }
            }
        })
    });
}

router.route('/addpets').post( async (req,res) => {
    console.log(req.body)
    addPets(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
    })
    
    });

router.route('/getpets').get( async (req,res) => {
       getPets(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
        
});


router.delete('/delete/:id',function(req,res){
        var id = req.params.id;
        Pets.findOneAndRemove({_id: id}, function(err) {
            if(err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log("Delete "+id)
            return res.status(200).json({message: 'Pets added successfully'});
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
                if(req.body.info){
                    foundObjects.info = req.body.info;
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