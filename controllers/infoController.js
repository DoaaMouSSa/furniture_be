const Info = require('../models/info');

exports.getInfo=async(req,res)=>{
    const info=await Info.findOne();
    res.status(200).json(info);
}

 //update 
 exports.updateInfo=async(req,res)=>{
   await Info.findOneAndUpdate(req.body,{new:true});
    res.status(203).json('updated');    
 }
