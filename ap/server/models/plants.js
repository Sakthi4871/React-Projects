const mongoose=require('mongoose')

// MongoDB setup (create your own MongoDB database and schema

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String
})

const UserModel=mongoose.model("Register",UserSchema)
module.exports = UserModel;