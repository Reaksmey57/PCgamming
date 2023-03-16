const express = require("express");
const userRouter = require("../backend/routes/userRoute");


const app = express();

//Global middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log("this is my middleware");
    next();
});

//Rout Middelware
app.use("/api/v1/user",userRouter);

//app.use("/api1/v1/user",userRouter);

module.exports = app;