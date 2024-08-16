// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const upload = require('../config/multer'); // Import Multer configuration
const productContoller=require('../controllers/productController');



router.post('/add', upload.single('image'),productContoller.createProduct);
router.get('/getAll',productContoller.getAllProducts);


module.exports=router;
