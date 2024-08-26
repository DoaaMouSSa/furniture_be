const ChooseSection = require('../models/chooseSection');



exports.getChooseSection=async(req,res)=>{
    const chooseSection=await ChooseSection.findOne();
    res.status(200).json(chooseSection);
}

//update 
exports.updateChooseSection=async(req,res)=>{
await ChooseSection.findOneAndUpdate(req.body,{new:true});
 res.status(203).json('updated');    
}