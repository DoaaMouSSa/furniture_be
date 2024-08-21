const mongoose=require('mongoose')
const messageSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String},
    phone:{type:Number,required:true},
    message:{type:String},
    date:{type:Date}
})
const Message=mongoose.model('Message',messageSchema);
Message.syncIndexes();
module.exports=Message;