require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const productsroutes = require("./Routes/products");
const connectdb = require("./db/connect");


 app.get('/' , (req, res)=>
 {
    res.send("i am home")
 })

 app.use('/api/products' , productsroutes);
const start= async ()=>
{
   try{

      await connectdb(process.env.MONGODBURL);
      app.listen(port, ()=>
      {
        console.log("listening on port number 5000")
      })
   } catch{
       console.log("error")
   }
}

start();
