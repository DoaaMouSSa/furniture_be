// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const productContoller=require('../controllers/productController');



router.post('/add',productContoller.createProduct);
router.get('/getAll',productContoller.getAllProducts);


module.exports=router;
