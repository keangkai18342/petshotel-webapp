const expressFunction = require('express');
const mongoose = require('mongoose');
const router = expressFunction.Router();

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    foodname: String,
    type: String,
    price: Number,
    details: String
},{
    collection: 'about'
});

let food 
try {
    food = mongoose.model('about')
} catch (error){
    food = mongoose.model('about', userSchema);
}

router.route('/addfood').post( async (req,res) => {
    console.log(req.body)
    addFood(req.body).then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
    })
    
    });

    const addFood = (foodData) => {
        return new Promise ((resolve,reject) => {
            var new_food = new food(
                foodData
            );
            console.log(new_food)
            new_food.save((err,data) => {
                if(err){
                    reject(new Error('Cannot insert Food to DB!'));
                }else{
                    resolve({message: 'Food added successfully'});
                }
            });
        });
    }


    const getfood = () => {
        console.log("123")
        return new Promise ((resolve, reject) => {
            food.find({},(err,data)=>{
                if(err){
                    reject(new Error('Cannot get Food!'));
                }else{
                    if(data){
                        resolve(data)
                    }else{
                        reject(new Error('Cannot get Food!'));
                    }
                }
            })
        });
    }

    router.route('/getfood').get( async (req,res) => {
        getfood(req.body).then(result => {
         console.log(result);
         res.status(200).json(result);
     })
     .catch(err => {
         console.log(err);
     })
         
 });


module.exports = router