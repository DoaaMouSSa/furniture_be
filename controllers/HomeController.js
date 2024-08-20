const Product = require('../models/product');
const Testimonial = require('../models/testimonial');


exports.getProducts=async(req,res)=>{
    const products=await Product.find().limit(4);
    res.status(200).json(products);
}

exports.getTestimonials=async(req,res)=>{
    const testimonials=await Testimonial.find().limit(4);
    res.status(200).json(testimonials);
}