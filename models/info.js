const mongoose=require('mongoose')
const infoSchema=mongoose.Schema({
    address:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
})
const Info=mongoose.model('Info',infoSchema);
Info.syncIndexes();
module.exports=Info;