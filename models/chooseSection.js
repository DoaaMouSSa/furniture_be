const mongoose=require('mongoose')
const chooseSectionSchema=mongoose.Schema({
    title:{type:String,required:true,},
    subTitle:{type:String},
    image:{type:String},
    isDel:{type:Boolean},
})
const ChooseSection=mongoose.model('ChooseSection',chooseSectionSchema);
ChooseSection.syncIndexes();
module.exports=ChooseSection;