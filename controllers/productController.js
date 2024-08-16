const Product = require('../models/product');
const User =require('../models/product');


exports.createProduct=async(req,res)=>{
    try{
    const{name,desc,price}=req.body;
    const newProduct=await User.create({name,desc,price});
    res.status(201).json(newProduct);
    }catch(err)
    {
        res.status(500).json(err)
    }
}

exports.getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json(products);
}
//find and update
// router.put('/update/:id',async(req,res)=>{
//     try{
//        await Product.findByIdAndUpdate(req.params.id,req.body);
//         res.status(202).json('updated');

//     }catch(err){
//     res.status(500).send(err.message);
//     }    
// }); 
// //soft delete 
// router.delete('/delete/:id',async(req,res)=>{
//     try{
//         await Product.findByIdAndUpdate(req.params.id,{isDel:true});
//          res.status(203).json('deleted');
 
//      }catch(err){
//      res.status(500).send(err.message);
//      }     
// }); 
