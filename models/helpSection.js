const mongoose=require('mongoose')
const helpSectionSchema=mongoose.Schema({
    title:{type:String,required:true,},
    subTitle:{type:String},
    image:{type:String},
})
const HelpSectionSchema=mongoose.model('HelpSectionSchema',helpSectionSchema);
HelpSectionSchema.syncIndexes();
module.exports=HelpSectionSchema;