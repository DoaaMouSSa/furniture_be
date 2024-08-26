const express=require('express');
const router=express.Router();
const helpSectionController=require('../controllers/helpSectionController');


router.get('/get',helpSectionController.getHelpSection);
router.put('/update',helpSectionController.updateHelpSection);


module.exports=router;
