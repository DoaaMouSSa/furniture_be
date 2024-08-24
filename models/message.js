const mongoose=require('mongoose')
const messageSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String},
    phone:{type:Number,required:true},
    message:{type:String,required:true},
    date:{type:Date}
})
const Message=mongoose.model('Message',messageSchema);
Message.syncIndexes();
module.exports=Message;