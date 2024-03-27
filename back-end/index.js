const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Connection = require("./db/conn");
const server = express();
const User = require("./Models/User.js");
const Customer = require("./Models/register");
// const jwt = require("jsonwebtoken");
// const secretkey = "Project123#@";
const Contect = require("./Models/Contect");
const register = require("./Models/register");
const admin = require("./Models/Admin");

server.use(cors()); // when ever .use used that means it is meadlle ware and it can change request coming from client and apply some fartures on it
server.use(bodyParser.json());

async function main() {
  await Connection();
  await admin;
}
server.post("/signup", (req, res) => {
  var validator = "";
  if (req.body.name == "") validator += "Name is required";
  if (req.body.email == "") validator += "Email is required";
  if (req.body.password == "") validator += "Password is required";
  if (req.body.contact == "") validator += "Contact is required";
  if (req.body.address == "") validator += "Address is required";

  if (!!validator) {
    res.json({
      status: 409,
      success: false,
      msg: validator,
    });
  } else {
    //duplicacy
    User.findOne({ email: req.body.email }).then((udata) => {
      if (udata == null) {
        //insert
        let userobj = new User();
        console.log(req.body);
        userobj.name = req.body.name;
        userobj.email = req.body.email;
        // userobj.password = bcrypt.hashSync(req.body.password,saltround)
        userobj.password = req.body.password;
        userobj.userType = 2;
        userobj.contect = req.body.contect;
        userobj.save().then((userdata) => {
          console.log("The request body is : " + req.body.className);
          console.log("The request body is : " + req.body.rollNumber);
          console.log("The User data is : " + userdata);
          let customerobj = new Customer();
          customerobj.name = req.body.name;
          customerobj.email = req.body.email;
          customerobj.password = req.body.password;
          customerobj.cpassword = req.body.cpassword;
          customerobj.contact = req.body.contact;
          customerobj.address = req.body.address;
          customerobj.userId = userdata._id;
          customerobj.className = req.body.className;
          customerobj.rollNumber = req.body.rollNumber;
          customerobj.status = userdata.status;
          customerobj.save().then((user) => {
            console.log("the data in customer is : " + user);
            res.json({
              status: 200,
              success: true,
              msg: "User registered",
              User: user,
            });
          });
        });
      } else {
        res.json({
          status: 409,
          success: false,
          msg: "user already exists",
        });
      }
    });
  }
});
server.post("/update", (req, res) => {
  var validator = "";

  if (req.body.name == "") validator += "Name is required";
  if (req.body.email == "") validator += "Email is required";
  if (req.body.password == "") validator += "Password is required";
  if (req.body.contact == "") validator += "Contact is required";
  if (req.body.address == "") validator += "Address is required";
  if (req.body.rollNumber == "") validator += "rollNumber is required";

  if (!!validator) {
    res.json({
      status: 409,
      success: false,
      msg: validator,
    });
  } else {
    //duplicacy
    User.updateOne(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          status: true,
        },
      },
      { upsert: true }
    )
      //insert
      // let userobj = new User()
      // console.log(req.body);
      // userobj.name = req.body.name
      // userobj.email = req.body.email
      // // userobj.password = bcrypt.hashSync(req.body.password,saltround)
      // userobj.password = req.body.password
      // userobj.userType = 2
      // userobj.contect = req.body.contect
      // userobj.save()
      .then((userdata) => {
        console.log("The request body is : " + req.body.className);
        console.log("The request body is : " + req.body.rollNumber);
        console.log("The User data is : " + userdata);
        // let customerobj = new Customer()
        Customer.updateOne(
          { _id: req.body._id },
          {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword,
            contact: req.body.contact,
            address: req.body.address,
            userId: userdata._id,
            className: req.body.className,
            rollNumber: req.body.rollNumber,
            status: userdata.status,
          },
          { upsert: true }
        ).then((user) => {
          console.log("the data in customer is : " + user);
          Customer.findOne({_id: req.body._id}).then((data)=>{
            console.log("The data is : "+data);
            res.json({
              status: 200,
              success: true,
              msg: "Updated Successfully",
              User: data,
            });
          })
        });
      }).catch((err)=>{
        console.log(err);
        res.json({
          status: 409,
          success: false,
          msg: "Updation Un-Successfull",
        });
      })
  }
});

// const user = await Register.findOne({email:req.body.email});
// console.log("The User data is : "+ user);
// if(user){
//   if(user.password !== req.body.password){
//     console.log("not same "+user.password+" the input is "+req.body.password);
//     res.status(400).send("Password not Matched");
//   }else{
//     res.status(200).send(user);
//     // console.log(user);
//     console.log(JSON.stringify(user));
//   }
//   // console.log("The data in the User"+user);
// }else{
//   res.status(400).send("Register Yourself First");
// }
// user.email = req.body.email;
// user.password = req.body.password;
// const doc = await user.save();
// console.log(doc);

// res.status(200).json(doc);
// res.json(doc);

// server.post("/login", async (req, res) => {
//     const userFind = await  Register.findOne({email:req.body.email});
//     console.log("Rollno",req.body.rollNumber);
//     const userWithRollNo = await Register.findOne({rollNumber:req.body.rollNumber})
//     console.log("userFind",userFind);
//     console.log("userWithRollNo",userWithRollNo)
//     if(userFind){
//       res.status(400).send("Email-id Already Exist, Please Change it");
//     } else if (userWithRollNo){
//       res.status(400).send("Rollno Already Exist, Please Change it");
//     }
//     else{
//       let register = new Register();
//       (register.email = req.body.email),
//         (register.password = req.body.password),
//         (register.address = req.body.address),
//         (register.contact = req.body.contact),
//         (register.name = req.body.name),
//         (register.className = req.body.className),
//         (register.rollNumber = req.body.rollNumber);
//       const doc = await register.save();
//       console.log(JSON.stringify(doc));
//       res.status(200).send(doc);
//     }
// });
server.post("/login", async (req, res) => {
  validator = "";
  if (req.body.email == "") validator += "Email is required";
  if (req.body.password == "") validator += "password is required";
 
  if (!!validator) {
    res.json({
      status: 409,
      success: false,
      msg: validator,
    });
  } else {
    User.findOne({ email: req.body.email })
      .then((userdata) => {
        if (userdata === null) {
          res.json({
            status: 404,
            success: false,
            msg: "User not found",
          });
        } else {
          if (req.body.password === userdata.password) {
            Customer.findOne({ email: req.body.email })
              .then((customerData) => {
                console.log("The data in Customer is : " + customerData);
                const {
                  _id,
                  name,
                  email,
                  password,
                  cpassword,
                  contact,
                  address,
                  className,
                  rollNumber,
                  userType
                } = customerData;
                const response = {
                  _id,
                  name,
                  email,
                  password,
                  cpassword,
                  contact,
                  address,
                  className,
                  rollNumber,
                  userType,
                };
                console.log("The data in response is:", response);
                res.json({
                  status: 200,
                  success: true,
                  msg: "Login successful",
                  data: response,
                });
              })
              .catch((err) => {
                console.log("Error retrieving customer data:", err);
                res.json({
                  status: 500,
                  success: false,
                  msg: "An error occurred while retrieving customer data",
                });
              });
          } else {
            res.json({
              status: 400,
              success: false,
              msg: "Password is incorrect",
              data: userdata,
            });
          }
        }
      })
      .catch((err) => {
        console.log("Error finding user:", err);
        res.json({
          status: 500,
          success: false,
          msg: "An error occurred while finding the user",
        });
      });
  }
});

server.post("/feedback", async (req, res) => {
  let validator = "";
  let data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  if (req.body.name === "" || req.body.name === Number) {
    validator += "Enter The Name Please ";
  } else if (req.body.email === "" || req.body.email === Number) {
    validator += "Enter The email Please ";
  } else if (req.body.phone === null || req.body.phone === "") {
    validator += "Enter The phone Please ";
  } else if (req.body.message === "" || req.body.message == Number) {
    validator += "Enter The message Please ";
  } else {
    const contect = await Contect();
    (contect.name = data.name),
      (contect.email = data.email),
      (contect.phone = data.phone),
      (contect.message = data.message);
    console.log(contect.data);
    console.log(contect);
    const response = contect.save();
    validator += "Feedback Send Successfully";
    res.json({
      status: 200,
      success: true,
      data: contect,
      id: response._id,
      msg: validator,
    });
  }
});

server.post("/user", (req, res) => {
  console.log("The id is "+req.body.email);
  Customer.findOne({ email : req.body.email}).then((customerData) => {
    console.log("The data in Customer is : " + customerData);
    const {
      _id,
      name,
      email,
      password,
      cpassword,
      contact,
      address,
      className,
      rollNumber,
      userType
    } = customerData;
    const response = {
      _id,
      name,
      email,
      password,
      cpassword,
      contact,
      address,
      className,
      rollNumber,
      userType,
    };
    console.log("The data in response is:", response);
    res.json({
      status: 200,
      success: true,
      msg: "Login successful",
      data: response,
    });
  }).catch((err)=>{
    console.log("Error Occurs"+err);
    res.json({
      status: 400,
      success: false,
      data: "User Not found",
    });
  })
});
server.get("/users",(req,res)=>{
  User.find({}).then((user)=>{
    console.log(user);
    res.json({
      status:200,
      success: true,
      data : user
    })
  }).catch((err)=>{
    console.log("The error is : "+err);
    res.json({
      status:400,
      success:false,
      data : "User not found"
    })
  })
})
server.get("/contact",(req,res)=>{
  Contect.find({}).then((user)=>{
    console.log("The data is in Contact :"+user);
    res.json({
      status:200,
      success: true,
      data : user
    })
  }).catch((err)=>{
    console.log("The error is : "+err);
    res.json({
      status:400,
      success:false,
      data : "User not found"
    })
  })
})
server.get("/customers",(req,res)=>{
  register.find({}).then((user)=>{
    console.log(user);
    res.json({
      status:200,
      success: true,
      data : user
    })
  }).catch((err)=>{
    console.log("The error is : "+err);
    res.json({
      status:400,
      success:false,
      data : "User not found"
    })
  })
})


main();

const port = 4000;
server.listen(port, () => {
  console.log("Server Started at port " + port);
});
