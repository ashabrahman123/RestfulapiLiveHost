
const express = require('express');
const router = express.Router();
const {Allproducts, AllproductsTesting} = require('../Controllers/products');

// Allproducts, AllproductsTesting

router.route('/').get(async (req, res)=>
{
     await Allproducts(req, res)
})

router.route('/testing').get(async (req,res)=>
{
   await AllproductsTesting(req,res)
})

module.exports = router;


