const mongoose=require('mongoose');
const linkSchema=new mongoose.Schema(
    {
        Title:{
            type:String,
            required:true
        },
        Link:{
            type:String,
            required:true
        },
        user:{

            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

    },{
        timestamps:true
    }
);


const Links=mongoose.model('Links',linkSchema);
module.exports =Links;