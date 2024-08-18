const express=require('express');
const router=express.Router();
const userContoller=require('../controllers/userContoller');
const auth=require('../utilitize/authorization');



router.post('/register',userContoller.createUser);
router.post('/login',userContoller.login);



module.exports=router;

