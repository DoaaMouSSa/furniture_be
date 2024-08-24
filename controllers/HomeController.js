const Product = require('../models/product');
const Testimonial = require('../models/testimonial');
const Service = require('../models/service');


exports.getProducts=async(req,res)=>{
    const products=await Product.find().limit(4);
    res.status(200).json(products);
}

exports.getTestimonials=async(req,res)=>{
    const testimonials=await Testimonial.find().limit(4);
    res.status(200).json(testimonials);
}

exports.getServices=async(req,res)=>{
    const services=await Service.find().limit(3);
    res.status(200).json(services);
}

