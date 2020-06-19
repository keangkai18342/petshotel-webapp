var expressFunction = require('express');
const router = expressFunction.Router();
const authorization = require('../config/authorize')

const products = [
    {
        type: 'cpu',
        id: '100001',
        name: 'Intel Core i7 Gen 10th',
        detail: 'The Intel Core i7-10750H is a high-end processcor',
        quantity: 10,
        price: 10
    }
];




router.route('/products')
    .get(authorization, (req,res)=>{
        res.status(200).json();
    })

module.exports = router