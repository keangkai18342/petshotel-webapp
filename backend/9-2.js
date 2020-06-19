const jwt =require('jsonwebtoken');

const playload ={
    stdid: 'B6014728',
    name: 'Keangkai',
    major: 'CPE'
}

const key = 'MY_KEY';

const token = jwt.sign(playload,key,{expiresIn: 60*5});
console.log(token);

try {
    const dataToken = jwt.verify(token, key);
    console.log(dataToken);
} catch (error){
    console.log(error);
}