const mongoose=require('mongoose');
const todoschema=new mongoose.Schema(
    {
        Content:{
            type:String,
            required:true
        },Done:{
            type:Number,
            required:true

        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
   


},{
    timestamps:true
});
const Todo=mongoose.model('Todo',todoschema);
module.exports=Todo;