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
//find and update
// router.put('/update/:id',async(req,res)=>{
//     try{
//        await Testimonial.findByIdAndUpdate(req.params.id,req.body);
//         res.status(202).json('updated');

//     }catch(err){
//     res.status(500).send(err.message);
//     }    
// }); 
// //soft delete 
// router.delete('/delete/:id',async(req,res)=>{
//     try{
//         await Testimonial.findByIdAndUpdate(req.params.id,{isDel:true});
//          res.status(203).json('deleted');
 
//      }catch(err){
//      res.status(500).send(err.message);
//      }     
// }); 
