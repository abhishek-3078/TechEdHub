const express = require('express');
const app = express();
const cors=require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

var jwt = require('jsonwebtoken');
require('dotenv').config()
const User=require('./schema/user')

const PORT = 3000;
require('./db')
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("hello");
});

app.post('/signup',async(req,res)=>{
   
    
    let userData=req.body
    try{
        const data=await User.findOne({email:userData.email})
        console.log("ndsf:",data)
        if(data){
            return res.send({success:false,message:"already exist"})
        }
        userData=new User(req.body)
        const hashedPassword=await bcrypt.hash(userData.password,10)
        userData.password=hashedPassword
        await userData.save()
        res.send({success:true})
    }catch(e){
        res.send({success:false,message:e.message})
    }
    
})

app.post('/login',async(req,res)=>{
    let userData=req.body
    console.log(userData)
    try{
        const data=await User.findOne({email:userData.email})
        // var token = jwt.sign({ }, process.env.KEY)
        console.log("ndsf:",data)
        if(!data){
            return res.send({success:false,message:"no user exist"})
        }
        const isMatched = await bcrypt.compare(userData.password,data.password)
        if(!isMatched) {
            return res.send({success:false,message:"invalid credentials"})
    }   
    res.cookie('token', userData.email, { maxAge: 3600000 }).redirect('http://localhost:5173'); // Expires in 1 hour
    }catch(e){
        res.send({success:false,message:e.message})
    }
})
app.listen(3000,()=>{
    console.log(`server is listeing on the port ${PORT}`);
})