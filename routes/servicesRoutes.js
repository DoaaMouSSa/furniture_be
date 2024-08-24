// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express=require('express');
const router=express.Router();
const upload = require('../config/multer'); // Import Multer configuration
const serviceController=require('../controllers/serviceController');



router.post('/add', upload.single('image'),serviceController.createService);
router.get('/getAll',serviceController.getAllServices);
router.get('/getById/:id',serviceController.getService);
router.put('/update/:id',serviceController.updateService);
router.delete('/delete/:id',serviceController.deleteService);

module.exports=router;
