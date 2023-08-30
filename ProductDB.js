require('dotenv').config();
const connectdb = require("./db/connect");
const productmodel= require('./Models/schema');
const productjson = require("./products.json");

const start = async ()=>
{
  try{
    
    await connectdb(process.env.MONGODBURL);
    await productmodel.create(productjson)
    console.log("success");

  }catch(error)
  {
     console.log(error)
  }
}

start();

