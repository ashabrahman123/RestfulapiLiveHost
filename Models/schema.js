

const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default: 4.4
    },
    createdat:{
        type: Date,
        default:Date.now()
    },
    company:{
        type: String,
        // enum:{
        //     values:["apple" , "samsung" , "dell" , "mi"],
        //     message: 'values is not supported'
        // }
    }
})


module.exports =  mongoose.model("Products" , productschema);
