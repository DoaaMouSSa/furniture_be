const express=require('express');
const router=express.Router();
const homeContoller=require('../controllers/HomeController');



router.get('/product',homeContoller.getProducts);
router.get('/testimonial',homeContoller.getTestimonials);
router.get('/service',homeContoller.getServices);


module.exports=router;
