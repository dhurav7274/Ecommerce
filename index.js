const express=require("express");
const app=express();
require('dotenv').config();
console.log(process.env.PORT);

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// add user route 
const userRoute=require('./Routings/User.route');
app.use("/users",userRoute);


app.listen(process.env.PORT ||3000,()=>{
    console.log("server start ");
})