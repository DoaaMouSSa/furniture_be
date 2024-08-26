const mongoose=require('mongoose')
const helpSectionSchema=mongoose.Schema({
    title:{type:String,required:true,},
    subTitle:{type:String},
    image1:{type:String},
    image2:{type:String},
    image3:{type:String},
})
const HelpSectionSchema=mongoose.model('HelpSectionSchema',helpSectionSchema);
HelpSectionSchema.syncIndexes();
module.exports=HelpSectionSchema;