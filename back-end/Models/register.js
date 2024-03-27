// const mongoose = require("mongoose");

// const registerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     max: 20,
//   },
//   email: {
//     type: String,
//     required: true,
//     max: 50,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     min: 6,
//   },
//   address: {
//     type: String,
//     required: false,
//   },
//   className: {
//     type: String,
//     required: false,
//   },
//   rollNumber: {
//     type: Number,
//     required: true,
//   },
// },{
//   versionKey:false
// });
// module.exports = mongoose.model("register", registerSchema);

const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : {type:String,default:null},
    email : {type:String,default:null},
    password : {type:String,default:null},
    cpassword : {type:String,default:null},
    userType : {type:Number,default:2},
    contact : {type:Number,default:0},
    address : {type:String,default:null},
    className : {type:String,dafault:null},
    rollNumber : {type: Number,dafault:null},
    role : {type : String,default:"Student"},
    userId : {type:mongoose.SchemaTypes.ObjectId,ref:'users',default:null},
    created_at : {type:Date,default:Date.now()},
    status : { type:Boolean,default:true}
})

module.exports = new mongoose.model('Register',userschema,"registers")

