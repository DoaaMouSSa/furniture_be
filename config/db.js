const mongoose=require('mongoose');
require('dotenv').config();
const DefaultData=require('../utilitize/defaultData');

const connectDb=async ()=>{
    await mongoose.connect(process.env.DATABASE);
    console.log('mongoDB connected');
    await DefaultData.createDefaultData();
    console.log('created default data')
}
module.exports=connectDb;