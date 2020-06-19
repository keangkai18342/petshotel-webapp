const expressFunction = require('express');
const mongoose = require('mongoose');
const router = expressFunction.Router();

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    fristname: String,
    lastname: String,
    gender: String,
    email: String,
    phone:Number
},{
    collection: 'employee'
});

let emp 
try {
    emp = mongoose.model('employee')
} catch (error){
    emp = mongoose.model('employee', userSchema);
}

router.route('/addemp').post( async (req,res) => {
    console.log(req.body)
    addemp(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
    })
    
    });

    const addemp = (empData) => {
        return new Promise ((resolve,reject) => {
            var new_emp = new emp(
                empData
            );
            console.log(new_emp)
            new_emp.save((err,data) => {
                if(err){
                    reject(new Error('Cannot insert Employee to DB!'));
                }else{
                    resolve({message: 'Employee added successfully'});
                }
            });
        });
    }


    const getemp = () => {
        console.log("123")
        return new Promise ((resolve, reject) => {
            emp.find({},(err,data)=>{
                if(err){
                    reject(new Error('Cannot get Employee!'));
                }else{
                    if(data){
                        resolve(data)
                    }else{
                        reject(new Error('Cannot get Employee!'));
                    }
                }
            })
        });
    }

    router.route('/getemp').get( async (req,res) => {
        getemp(req.body).then(result => {
         console.log(result);
         res.status(200).json(result);
     })
     .catch(err => {
         console.log(err);
     })
         
 });


module.exports = router