const express = require('express');
const app = express();
const cors=require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');
require('dotenv').config()
const User=require('./schema/user')

const PORT = process.env.PORT||3000;
require('./db')
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/getUser',async (req,res)=>{
    const token=req.headers.authorization
    console.log("token: " , token ,typeof(token));
    if(token == "null") {
        console.log("in null token");
        return res.status(401).send()
    }
    try{
        const {email:Email,exp}=jwt.verify(token,process.env.KEY)
        if(new Date().getTime()/1000 > exp){
            return res.status(401).send({message:"token expired"})
        }
    
        // console.log(exp,Email,new Date().getTime())
        const data= await User.findOne({email:Email})
    
        // console.log(data);
        console.log("last")
        res.status(200).send({username:data.username,fullname:data.fullname,email:data.email})
    }catch(e){
        console.log("hello erroe");
        return res.status(401).send({message:e.message});
    }
})
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
        res.redirect(`http://localhost:5173`)
    }catch(e){
        res.send({success:false,message:e.message})
    }
    
})

app.post('/login',async(req,res)=>{
    let userData=req.body
    console.log(userData)
    try{
        const data=await User.findOne({email:userData.email})
        
        console.log("USERDATA:",data)
        if(!data){
            return res.send({success:false,message:"no user exist"})
        }
        const isMatched = await bcrypt.compare(userData.password,data.password)
        if(!isMatched) {
            return res.send({success:false,message:"invalid credentials"})
        }   
         
    var token = jwt.sign({
        email: userData.email
      }, process.env.KEY, { expiresIn: 60 * 60 })
    // res.cookie('token', userData.email, { maxAge: 360000}).redirect('http://localhost:5173'); // Expires in 1 hour
    res.send({token,message:"login successfully",success:true})
    }catch(e){
        res.status(403).send({success:false,message:e.message})
    }
})

app.get('/logout',(req,res)=>{
    console.log("helko")
    // res.clearCookie('token',{
    //     path:'/',
    //     domain:'localhost'
    // })
    try{
        console.log("hello");
        res.send({success:true,message:"successfully logout"})
        // res.clearCookie('token').redirect('http://localhost:5173/login')
    }catch(e){
        console.log(e)
    }
    // res.cookie('token',"",{expires: new Date(0)})
    // res.cookie('token',"abhishek",{maxAge:10})
    // res.clearCookie('token')
})
app.listen(3000,()=>{
    console.log(`server is listeing on the port ${PORT}`);
})