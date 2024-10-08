const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    desc:{type:String},
    price:{type:Number,required:true},
    image:{type:String},
})
const Product=mongoose.model('Product',productSchema);
Product.syncIndexes();
module.exports=Product;