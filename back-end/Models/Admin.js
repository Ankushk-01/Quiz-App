
const mongoose = require("mongoose")

const adminschema = new mongoose.Schema({
    name : {type:String,default:null},
    email : {type:String,default:null},
    password : {type:String,default:null},
    userType : {type:Number,default:2}, //1= admin, 2=customer
    created_at : {type:Date,default:Date.now()},
    status : { type:Boolean,default:true},
    role : {type : String,default:"Student"}
})

module.exports = new mongoose.model('Admin',adminschema,"admin")