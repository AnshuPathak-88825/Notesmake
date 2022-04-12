const Post=require('../model/post');
module.exports.create=function(req,res)
{
    if(!req.body.content)
    {
        return res.redirect('back');
    }
    if(!req.body.title)
    {
        return res.redirect('back');
    }
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
module.exports.addnote=function(req,res)
{
    return res.render('addnotes');
    
}