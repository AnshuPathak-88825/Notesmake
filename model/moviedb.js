const mongoose=require('mongoose');
const Movieschema=new mongoose.Schema(
    {
        Moviename:{
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
const Moviedb=mongoose.model('Movieschema',Movieschema);
module.exports=Moviedb;