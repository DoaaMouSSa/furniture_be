const Message = require('../models/message');

exports.createMessage=async(req,res)=>{
    const{name,email,phone,message}=req.body;
    if (!name || !email || !message) {
        return res.status(400).send('Name, email, and message are required.');
      }
    const newMessaage=new Message({ 
        name: name,
    email: email,
    phone: phone,
    message: message,
    });
    try {
        // Save the item to the database
        const savedMessage = await newMessaage.save();
        res.status(201).json(savedMessage);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getAllMessages=async(req,res)=>{
    const messages=await Message.find();
    res.status(200).json(messages);
}
exports.getMessage=async(req,res)=>{
    const message= await Message.findById(req.params.id);
       res.status(202).json(message);  
 } 
 //delete 
 exports.deleteMessage=async(req,res)=>{
   await Message.findByIdAndDelete(req.params.id);
    res.status(203).json('deleted');    
 }
