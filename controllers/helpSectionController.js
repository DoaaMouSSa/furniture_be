const HelpSection = require('../models/helpSection');


exports.getHelpSection=async(req,res)=>{
    const helpSection=await HelpSection.findOne();
    res.status(200).json(helpSection);
}


//update 
exports.updateHelpSection=async(req,res)=>{
  await HelpSection.findOneAndUpdate(req.body,{new:true});
   res.status(203).json('updated');    
 }
 