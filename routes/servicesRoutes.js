// if(PageSize && CureentPage){  
//     postquery.skip(PageSize * (CureentPage-1));  
//   }  
const express = require('express');
const router = express.Router();
const Service = require('../models/service.js');

//add
router.post('/add',async(req,res)=>{
    try{
    let newService=await Service.create(req.body);
    
    res.status(201).json('created successfully');
}catch(err){
    res.status(500).send(err.message);
}
});
//find and update
router.put('/update',async(req,res)=>{
    try{
       await Service.findByIdAndUpdate('66bba32bbc296985c4865ff2',req.body);
        res.status(202).json('updated');

    }catch(err){
    res.status(500).send(err.message);
    }    
}); 
//soft delete 
router.delete('/delete',async(req,res)=>{
    try{
        //conditon then update value
        
        let serviceToDelete=await Auth.findById('66b9c375ba7bb4506656e958');
        await serviceToDelete.findById('66b9c375ba7bb4506656e958');
        res.status(202).json(user);

    }catch(err){
    res.status(500).send(err.message);
    }    
}); 
//get
router.get('/get',async(req,res)=>{
    try{
    res.status(200).json('done');
}catch(err){
    res.status(500).send(err.message);
}
});
module.exports=router
