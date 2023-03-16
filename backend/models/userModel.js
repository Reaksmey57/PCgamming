const mongoose = require("mongoose")
const validator = require("validator");



const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"please input you firstname"]
    }, 
    Surname:{
        type:String,
        required:[true,"please input you Surname"]
    }, 
    email:{
        type:String,
        required:[true,"please input you email"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"please input a valid email"]


    },
   
    password:{
        type:String,
        required:[true,"please input your password"],
        minlength:8

    },
    confirmPassword:{
        type:String,
        required:[true,"please input your confirm Password"],
        validate:{
            validator:function(confirmPassword){
                return confirmPassword === this.password;
            },
            message:"Password not match!"

        }
    },
    role:{
        type:String,
        enum:["user","admiin"],
        default:"user"
    }

});

const user=mongoose.model("user", userSchema  )
module.exports = user;