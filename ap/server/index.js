const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/plants.js')
const bodyParser = require('body-parser');
// const multer = require('multer');
// const nodemailer = require('nodemailer');
const InquiryModel=require('./models/InquirySchema.js')


const app=express()
app.use(express.json())
app.use(cors())

// Mongoose Connection

mongoose.connect('mongodb://127.0.0.1:27017/Account')
     .then(()=>{console.log('connected to server')})
     .catch(()=>{console.log('connection error')})

// Posting and saving the signup form data

app.post('/register', (req, res)=>{
    console.log(req.body)
   try{
    const {username, email, password, confirmpassword}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            return res
                .status(200)
                .send({message:"user already exist",success:false});
            }
        UserModel.create(req.body)
        .then(users=>res.json({users}))
        res.status(200)
        .send({message:"user created",success:true});
    })
    }catch(error){
        res
        .status(500)
        .send({message:"error",success:false,error});
    }
});

// Login data and validation 

app.post("/login", (req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password=== password){
                res.json(user)
                .send({message:"Login Successfull", _id:user._id})
            }
            else{
                res.json("Incorrect Password")
            }
        }
        else{
            res.json('No Record found')
        }
    })
})

// Saving the inquiry data in DB using http request

app.post('/inquiry', (req, res)=>{
 try{
    const {username, email, message}=req.body;
    const inquiryData= InquiryModel.create(req.body)
    res.status(200).json(inquiryData).send("Inquiry sent");
        
    }catch(error){
        res
        .status(500)
        .send({message:"error in storing inquiry data"});
    }
  })


// Fetching data for pofile

  app.post("/profile",(req, res)=>{
    const { ID }=req.body;
    console.log(req.body);
    UserModel.findOne({_id:ID})
    .then(user=>{
        if(user){
            res.json(user);
            console.log(user);
        }else
        {
            res.json("not found");
        }
    }
    )
})

// Fetching inquiry data from DB

app.post("/inquirydata",(req, res)=>{
    const { email }=req.body;
    console.log(req.body);
    InquiryModel.find({email:email})
    .then(user=>{
        if(user){
            res.json(user);
            console.log(user);
        }else
        {
            res.json("not found");
        }
    }
    )
})

// API endpoint for posting the updated details in register
 
app.put('/updateprof', async (req, res) => {
    try {
        const {_id,username,email,password}=req.body
        console.log(req.body)
        await UserModel.updateOne({_id: _id}, {
            $set: {
                "username": username,
                "email":email,
                "password":password
            }
        });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//server listening to the port 3000

app.listen(3000, ()=>{
    console.log("Server is running");
})
