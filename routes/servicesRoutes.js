// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const upload = require('../config/multer'); // Import Multer configuration
const serviceController=require('../controllers/serviceController');



router.post('/add', upload.single('image'),serviceController.createService);
router.get('/getAll',serviceController.getAllServices);


module.exports=router;
