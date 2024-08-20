const express=require('express');
const router=express.Router();
const homeContoller=require('../controllers/HomeController');



router.get('/products',homeContoller.getProducts);
router.get('/testimonials',homeContoller.getTestimonials);


module.exports=router;
