const Post=require('../model/post');
module.exports.create=function(req,res)
{
    Post.create({
        content:req.body.content,
        Title:req.body.title,
        user:req.user._id
        
    },function(error,post){

        if(error)
        {
            console.log("error in creating post");
            return ;
        }
        return res.redirect('back');
    });
}