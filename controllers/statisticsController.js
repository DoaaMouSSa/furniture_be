const Product = require('../models/product');
const Testimonial = require('../models/testimonial');
const Service = require('../models/service');
const Message = require('../models/message');


exports.get=async(req,res)=>{
    const productCount = await Product.countDocuments();
    const testimonialCount = await Testimonial.countDocuments();
    const serviceCount = await Service.countDocuments();
    const messageCount = await Message.countDocuments();

    res.status(200).json({
        productCount,
        testimonialCount,
        serviceCount,
        messageCount
      });
}
