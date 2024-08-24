
const express=require('express');
const router=express.Router();
const messagesController=require('../controllers/messagesController');



router.post('/add',messagesController.createMessage);
router.get('/getAll',messagesController.getAllMessages);
router.delete('/delete/:id',messagesController.deleteMessage);

module.exports=router;
