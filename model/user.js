const { timeStamp } = require('console');
const mongoose=require('mongoose');
const userschema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        passward:{
            type:String,
            required:true,
            unique:true
        },name:{
            type:String,
            required:true,
            unique:true
        }
    },{
        timestamps:true
    }
)
const User=mongoose.model('User',userschema);
module.exports=User;