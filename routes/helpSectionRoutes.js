const express=require('express');
const router=express.Router();
const helpSectionController=require('../controllers/helpSectionController');



router.get('/add',helpSectionController.createHelpSection);
router.get('/get',helpSectionController.getHelpSection);


module.exports=router;
