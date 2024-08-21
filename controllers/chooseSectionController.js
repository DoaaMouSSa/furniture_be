const ChooseSection = require('../models/chooseSection');


exports.createChooseSection=async(req,res)=>{
    const{title,subTitle}=req.body;
    const imageFile = req.file;
    if (!title || !subTitle || !imageFile) {
        return res.status(400).send('title, subTitle, and image are required.');
      }
    const newChooseSection=new ChooseSection({ 
    title: title,
    subTitle: subTitle,
    image: `/uploads/${imageFile.filename}`
    });
    try {
        // Save the item to the database
        const savedChooseSection = await newChooseSection.save();
        res.status(201).json(savedChooseSection);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getChooseSection=async(req,res)=>{
    const chooseSection=await ChooseSection.findOne();
    res.status(200).json(chooseSection);
}