const { redirect } = require('express/lib/response');
const Post = require('../model/post');
module.exports.create = function (req, res) {

    if (!req.body.content) {
        return res.redirect('back');
    }
    if (!req.body.title) {
        return res.redirect('back');
    }
    Post.create({
        content: req.body.content,
        Title: req.body.title,
        user: req.user._id

    }, function (error, post) {

        if (error) {
            console.log("error in creating post");
            return;
        }
        return res.redirect('/user/profile');
    });
}
module.exports.addnote = function (req, res) {

    title = "";
    content = ""
    button = "Create"
    action="/posts/create";
    return res.render('addnotes', { Title: title, Content: content, Button: button,Action:action });

}


// for delete notes 
module.exports.deletenote = function (req, res) {

    // get id from query of url 
    const id = req.query.id;

    // this is function will find out and delete our contact 

    Post.findByIdAndDelete(id, function (error) {

        if (error) {
            console.log("error during deleting notes");
            return;
        }
        return res.redirect('back');


    });
}
module.exports.readnotes = function (req, res) {

    // get id from query of url 
    const id = req.query.id;

    Post.findById({ _id: id }, function (error, user) {
        if (error) {
            console.log("error is their");
            return;

        }
        var date = new Date()
        var date = user.createdAt.toDateString();
        return res.render('_readview', { notes: user });


    })
    // return res.render('home');



}
module.exports.edit = function (req, res) {

    const id = req.query.id;
    Post.findById({ _id: id }, function (error, user) {
        if (error) {
            console.log("error is their");
            return;

        }
        var title =user.Title;
        content = user.content;
        button = "Update"
        action="/posts/update/?id=" + id;
        return res.render('addnotes', { Title: title, Content: content, Button: button ,Action:action});

     


    })
    
 

}
module.exports.update=function(req,res)
{

    console.log(req.query.id);
    Post.findByIdAndUpdate(req.query.id,{content:req.body.content,Title:req.body.title},function(error,post){
        if(error)
        {
            console.log("error in update");
            return ;
        }
        console.log(post);
        return res.redirect('/user/profile');
    })

}