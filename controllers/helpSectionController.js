const HelpSection = require('../models/helpSection');


exports.createHelpSection=async(req,res)=>{
    const{title,subTitle}=req.body;
    const imageFile = req.file;
    if (!title || !subTitle || !imageFile) {
        return res.status(400).send('title, subTitle, and image are required.');
      }
    const newHelpSection=new HelpSection({ 
    title: title,
    subTitle: subTitle,
    image: `/uploads/${imageFile.filename}`
    });
    try {
        // Save the item to the database
        const savedHelpSection = await newHelpSection.save();
        res.status(201).json(savedHelpSection);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.get=async(req,res)=>{
    const helpSection=await HelpSection.findOne();
    res.status(200).json(helpSection);
}