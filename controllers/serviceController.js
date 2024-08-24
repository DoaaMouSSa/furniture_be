const Service = require('../models/service');

exports.createService=async(req,res)=>{
    const{title,subTitle,paragraph,}=req.body;
    const imageFile = req.file;
    if (!title || !subTitle || !imageFile) {
        return res.status(400).send('Name, subTitle, and image are required.');
      }
    const newService=new Service({ 
    title: title,
    subTitle: subTitle,
    paragraph:paragraph,
    image: `/uploads/${imageFile.filename}`
    });
    try {
        // Save the item to the database
        const savedService = await newService.save();
        res.status(201).json(savedService);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getAllServices=async(req,res)=>{
    const services=await Service.find();
    res.status(200).json(services);
}
exports.getService=async(req,res)=>{
  const service= await Service.findById(req.params.id);
     res.status(202).json(service);  
} 
//delete 
exports.deleteService=async(req,res)=>{
 await Service.findByIdAndDelete(req.params.id);
  res.status(203).json('deleted');    
}
//find and update
exports.updateService=async(req,res)=>{
 const { id } = req.params;
 const {title,subTitle,paragraph}=req.body;
 const updatedData={ title,subTitle, paragraph };
 const service= await Service.findByIdAndUpdate(id,updatedData, { new: true });
      if (!service) {
       return res.status(404).json({ message: 'service not found' });
     }
       res.status(202).json(service);   
} 
