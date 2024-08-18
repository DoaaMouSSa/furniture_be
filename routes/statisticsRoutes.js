// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const statisticsController=require('../controllers/statisticsController');


router.get('/count', statisticsController.get);


module.exports=router;
