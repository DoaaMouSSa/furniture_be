const Testimonial = require('../models/testimonial');
const path = require('path');


exports.createTestimonial=async(req,res)=>{
    const{name,comment,position}=req.body;
    const imageFile = req.file;
    if (!name || !position || !imageFile) {
        return res.status(400).send('Name, position, and image are required.');
      }
    const newTestimonial=new Testimonial({ name: name,
    comment: comment,
    position: position,
    image: `/uploads/${imageFile.filename}`
    });
    try {
        // Save the item to the database
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
      } 
    catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getAllTestimonials=async(req,res)=>{
    const testimonials=await Testimonial.find();
    res.status(200).json(testimonials);
}
exports.getTestimonial=async(req,res)=>{
  const testimonial= await Testimonial.findById(req.params.id);
     res.status(202).json(testimonial);  
} 
//delete 
exports.deleteTestimonial=async(req,res)=>{
  await Testimonial.findByIdAndDelete(req.params.id);
   res.status(203).json('deleted');    
}
//find and update
exports.updateTestimonial=async(req,res)=>{
  const { id } = req.params;
  const {name,comment,position}=req.body;
  const updatedData={ name,comment, position };
  const testimonial= await Testimonial.findByIdAndUpdate(id,updatedData, { new: true });
       if (!testimonial) {
        return res.status(404).json({ message: 'testimonial not found' });
      }
        res.status(202).json(testimonial);   
} 