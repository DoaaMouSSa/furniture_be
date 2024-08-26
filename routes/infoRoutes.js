
const express=require('express');
const router=express.Router();
const infoController=require('../controllers/infoController');


router.get('/get',infoController.getInfo);
router.put('/update',infoController.updateInfo);

module.exports=router;
