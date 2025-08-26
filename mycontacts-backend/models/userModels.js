const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [ true, "please add a user name"],
    },
    email : {
        type : String,
        required : [true, "please add a email"],
        unique : [true , "Email already used"],
    },
    password:{
        type : String,
        required :[true , "Please enter a password"],

    },
},
{
    timestamps : true,
});

module.exports = mongoose.model("User",userSchema);