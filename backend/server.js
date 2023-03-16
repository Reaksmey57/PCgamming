const express = require("express");
<<<<<<< HEAD
const app = require("./app")
const dotenv = require("dotenv");
dotenv.config({
    path:'.config.env',
});
const http = require("http");



//connect to db
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("Connect to MongoDB successful");
  })
  .catch((err)=>{
    console.log("Mongo DB err",err);
  });

//make server
=======
const app = express()
>>>>>>> cd345973c5ff3eb1433e690d44f48982248ac696
app.listen(5000,()=>{
    console.log("server is running on port 5000")                 
})