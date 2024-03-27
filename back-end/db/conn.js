const mongoose = require('mongoose')
const user = require("../Models/User");
const Customer = require("../Models/register")
 function Connection(){
    const response = mongoose.connect("mongodb+srv://Ankushk-12:Ankush%402001@ankush2001.cu64hed.mongodb.net/?retryWrites=true&w=majority/the-quiz-app7");
    response.then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log("Error occur "+err);
    })
    let userData = {
        userId: 1,
        name: "Ankush",
        email: "admin@gmail.com",
        password: "123",
        userType: 1,
        role : "Teacher"
    }
    user.findOne({userType : 1}).then((User)=>{
        if(User === null){
            let User = new user(userData);
    User.save().then((user)=>{
        console.log("The User data is "+ user);
        let customer = new Customer();
        customer.name = user.name,
        customer.email = user.email,
        customer.password = 123 ,
        customer.cpassword = 123 ,
        customer.role = user.role,
        customer.userType = 1,
        customer.contact = 9501795088,
        customer.userId = user._id,
        customer.save().then((User)=>{
            console.log("The data in the customer is : "+User);
        }).catch((err)=>{
            console.log("The error Occurs");
            console.log(err);
        })
        console.log("Admin Login Successfully");
    })
    .catch((err)=>{
        console.log("Error Occur"+err);
    })
        }
    })
    

}
module.exports = Connection;
