
const express=require('express');
const router=express.Router();
const messagesController=require('../controllers/messagesController');



router.post('/add',messagesController.createMessage);
router.get('/getAll',messagesController.getAllMessages);


module.exports=router;
