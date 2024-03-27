const mongoose = require("mongoose");

const conSchema = new mongoose.Schema({
    name : {
        type:String,
        default: null,
    },
    email : {
        type: String,
        default: null,
    },
    phone :{
        type: Number,
        default: null,
    },
    message : {
        type: String,
        default : null
    }
})

const Contect = mongoose.model("Contect",conSchema);

module.exports = Contect;