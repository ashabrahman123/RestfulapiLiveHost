const mongoose = require('mongoose')

const sslOptions = {
  sslValidate: true,  // You might need to adjust this based on your cluster settings
};

const connectdb = (url)=>
{
    console.log("connected");
     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  tlsAllowInvalidCertificates: true , ...sslOptions })
      .then(() => {
        console.log('Connected to MongoDB Atlas');
      })
      .catch(error => {
        console.error('Error connecting to MongoDB Atlas:', error);
      });
    
}

module.exports = connectdb;