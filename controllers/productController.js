const Product = require('../models/product');
const path = require('path');



exports.createProduct=async(req,res)=>{
    const{name,desc,price}=req.body;
    const imageFile = req.file;
    if (!name || !price || !imageFile) {
        return res.status(400).send('Name, price, and image are required.');
      }
    const newProduct=new Product({ name: name,
    desc: desc,
    price: parseFloat(price),
    image: `/uploads/${imageFile.filename}`
    });
    try {
        // Save the item to the database
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
      } 
    catch(err)
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
