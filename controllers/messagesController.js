const Message = require('../models/message');

exports.createMessage=async(req,res)=>{
    const{name,email,phone,message}=req.body;
    const newMessage=await Message.create({name,email,phone,message});
    res.status(201).json(newMessage);
}

exports.getAllMessages=async(req,res)=>{
    const messages=await Message.find();
    res.status(200).json(messages);
}

 //delete 
 exports.deleteMessage=async(req,res)=>{
   await Message.findByIdAndDelete(req.params.id);
    res.status(203).json('deleted');    
 }
