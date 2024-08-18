const User =require('../models/userSchema');
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");

exports.createUser=async(req,res)=>{
    const{name,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10); //max=10
    const user=await User.create({name,email,password:hashedPassword});
    res.status(201).json(user);
}


exports.login=async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) {
        res.status(404).json('user not found')
    }else{
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(500).json('wrong username or password')  
        }
        const token= jwt.sign({
            userId:user._id,
        },process.env.secret_key,
        {expiresIn:'10h'}
    );
    res.status(200).json(token);
    }
}