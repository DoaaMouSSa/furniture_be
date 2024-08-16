const mongoose=require('mongoose')
const  testimonialSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    comment:{type:String},
    position:{type:String,required:true},
    image:{type:String},
    isDel:{type:Boolean},
})
const Testimonial=mongoose.model('Testimonial',testimonialSchema);
Testimonial.syncIndexes();
module.exports=Testimonial;