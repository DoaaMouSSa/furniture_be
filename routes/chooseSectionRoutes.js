const express=require('express');
const router=express.Router();
const chooseSectionController=require('../controllers/chooseSectionController');



router.get('/get',chooseSectionController.getChooseSection);
router.put('/update',chooseSectionController.updateChooseSection);


module.exports=router;
