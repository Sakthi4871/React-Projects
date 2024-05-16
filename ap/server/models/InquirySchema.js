const mongoose=require('mongoose')

// MongoDB setup (create your own MongoDB database and schema

const InquirySchema=new mongoose.Schema({
    username:String,
    email:String,
    message:String,
})

const InquiryModel=mongoose.model("formSubmissions",InquirySchema)
module.exports = InquiryModel;