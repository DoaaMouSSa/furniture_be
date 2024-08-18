const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String,required:true,minLenght:3,maxLenght:10,lowercase:true,trim:true},
    email:{type:String,required:true,unique:true,lowercase:true,trim:true,
        validate:{
            validator:(value)=>{
                return  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
            },
            message:'Invalid email format'
        }
    },
    password:{type:String,required:true},
},
    {timestamps:true}
)
const User=mongoose.model('user',userSchema);
User.syncIndexes();
module.exports=User;