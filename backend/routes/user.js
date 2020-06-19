var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    phonenumber: Number
},{
    collection: 'users'
});

let User 
try {
    User = mongoose.model('users')
} catch (error){
    User = mongoose.model('users', userSchema);
}

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser) => {
    return new Promise ((resolve, reject) => {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password,
            name: dataUser.name,
            email: dataUser.email,
            phonenumber: dataUser.phonenumber
        });

        new_user.save((err,data) => {
            if(err){
                reject(new Error('Cannot insert user to DB!'));
            }else{
                resolve({message: 'Signup successfully'});
            }
        })
    });
}

router.route('/signup')
    .post((req,res)=>{
        console.log("test")
        makeHash(req.body.password)
        .then(hashText => {
            const playload = {
                username: req.body.username,
                password: hashText,
                name: req.body.name,
                email: req.body.email,
                phonenumber: req.body.phonenumber
            }
            console.log(playload);
            insertUser(playload)
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            }) 
            .catch(err => {
                console.log(err);
            })

        })
        .catch(err => {
        })
    });


router.route('/getUsers').get( async (req,res) => {
      getUser(req.body).then(result => {
         console.log(result);
         res.status(200).json(result);
     })
     .catch(err => {
         console.log(err);
     })
         
 });

 const getUser = () => {
    console.log("123")
    return new Promise ((resolve, reject) => {
        User.find({},(err,data)=>{
            if(err){
                reject(new Error('Cannot get User!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get User!'));
                }
            }
        })
    });
}

module.exports = router