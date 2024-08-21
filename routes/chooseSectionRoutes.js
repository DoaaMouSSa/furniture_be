const express=require('express');
const router=express.Router();
const chooseSectionController=require('../controllers/chooseSectionController');



router.get('/add',chooseSectionController.createChooseSection);
router.get('/get',chooseSectionController.getChooseSection);


module.exports=router;
