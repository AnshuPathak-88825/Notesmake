const mongoose=require('mongoose');
const movieschema=new mongoose.Schema({
    Book:{
        type:String,
        required:true
    },user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
    
},{
    timestamps:true
});
const Bookdb=mongoose.model('Bookdb',movieschema);
module.exports=Bookdb;