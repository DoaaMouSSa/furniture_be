
const express=require('express');
const router=express.Router();
const messagesController=require('../controllers/messagesController');



router.post('/add',messagesController.createMessage);
router.get('/getAll',messagesController.getAllMessages);
router.get('/getById/:id',messagesController.getMessage);
//router.put('/update/:id',messagesController.updateProduct);
router.delete('/delete/:id',messagesController.deleteMessage);

module.exports=router;
