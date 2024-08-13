const mongoose=require('mongoose')
const serviceSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    icon:{type:String,required:true},
})
const Service=mongoose.model('Service',serviceSchema);
Service.syncIndexes();
module.exports=Service;