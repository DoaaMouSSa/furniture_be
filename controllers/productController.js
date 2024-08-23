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
exports.getProduct=async(req,res)=>{
   const product= await Product.findById(req.params.id);
      res.status(202).json(product);  
} 
//delete 
exports.deleteProduct=async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
   res.status(203).json('deleted');    
}
//find and update
exports.updateProduct=async(req,res)=>{
  const { id } = req.params;
  const {name,desc,price}=req.body;
  const file = req.files['file'] ? req.files['file'][0].path : null;
  const updatedData={ name,desc, price, image:file };
    console.log(updatedData)
  const product= await Product.findByIdAndUpdate(id,updatedData, { new: true });
       if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
        res.status(202).json(product);   
} 

