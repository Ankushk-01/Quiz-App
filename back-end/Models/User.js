// const mongoose = require("mongoose");
// const Schema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//   },
//   { timestamps: true }
// );
// module.exports = mongoose.model("User", Schema);
const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : {type:String,default:null},
    email : {type:String,default:null},
    password : {type:String,default:null},
    userType : {type:Number,default:2}, //1= admin, 2=customer
    created_at : {type:Date,default:Date.now()},
    status : { type:Boolean,default:true},
    role : {type : String,default:"Student"}
})

module.exports = new mongoose.model('User',userschema,"users")