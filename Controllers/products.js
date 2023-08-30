const ProductSchemamodel = require("../Models/schema");

const Allproducts = async (req, res)=> 
{
  const Data = await ProductSchemamodel.find(req.query);
  res.status(200).json({ Data });
}

const AllproductsTesting = async (req, res)=> 
{
  res.status(200).json({msg : "i am getallaproductstesting" });
}

module.exports = {Allproducts, AllproductsTesting};


