const mongoose=require('mongoose')
const serviceSchema=mongoose.Schema({
    title:{type:String,required:true,unique:true},
    subTitle:{type:String},
    paragraph:{type:String,required:true},
    image:{type:String},
    isDel:{type:Boolean},
})
const Service=mongoose.model('Service',serviceSchema);
Service.syncIndexes();
module.exports=Service;