const mongoose=require('mongoose');
require('dotenv').config();


const connectDb=async ()=>{
    await mongoose.connect(process.env.DATABASE);
    console.log('mongoDB connected');
}
module.exports=connectDb;