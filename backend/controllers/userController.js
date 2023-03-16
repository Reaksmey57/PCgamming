const User = require("../models/userModel");




exports.signUp = async(res,req,next)=>{
    const newUser = await User.create({
        firstname: req.body.firstname,
        Surname:req.body.Surname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    });
    

    res.status(201).json({
        status: "success",
        data: newUser,
        token,

    });
}