// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const upload = require('../config/multer'); // Import Multer configuration
const testimonialContoller=require('../controllers/testimonialController');



router.post('/add', upload.single('image'),testimonialContoller.createTestimonial);
router.get('/getAll',testimonialContoller.getAllTestimonials);


module.exports=router;
