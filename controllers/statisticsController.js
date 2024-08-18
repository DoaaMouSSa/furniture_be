const Product = require('../models/product');
const Testimonial = require('../models/testimonial');

exports.get=async(req,res)=>{
    const productCount = await Product.countDocuments();
    //const serviceCount = await Service.countDocuments();
    const testimonialCount = await Testimonial.countDocuments();
    res.status(200).json({
        productCount,
        testimonialCount,
      });
}
