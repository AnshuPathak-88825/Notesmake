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
        return res.redirect('/user/profile');
    });
}
module.exports.addnote=function(req,res)
{


    return res.render('addnotes');
    
}


// for delete notes 
module.exports.deletenote=function(req,res)
{

    // get id from query of url 
    const id =req.query.id;

    // this is function will find out and delete our contact 

    Post.findByIdAndDelete(id,function(error){

        if(error)
        {
            console.log("error during deleting notes");
            return ;
        }
        return res.redirect('back');


    });
}
module.exports.readnotes=function(req,res)
{

    // get id from query of url 
    const id =req.query.id;
    Post.findById({_id:id},function(error,user){
        if(error)
        {
            console.log("error is their");
            return ;

        }
        console.log(user._id);
        return res.render('_readview',{notes:user});
        return ;
        

    })
    // return res.render('home');


    
}