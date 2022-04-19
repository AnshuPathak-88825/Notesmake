const { findByIdAndDelete } = require('../model/todo');
const Todo = require('../model/todo');

module.exports.view = function (req, res) {

    // finding user 
    Todo.find({ user: req.user._id }, function (error, posts) {

        if (error) {
            console.log("error during fectching data from database");
        }
        return res.render('todo', { title: "Profile", todo_list: posts });


    });


}
module.exports.create = function (req, res) {
    // var body = req.body;
    if (req.user) {

        // add data to our database using create function
        Todo.create({
            Content: req.body.routine,
            Done: 0,
            user: req.user._id

        }, function (error, post) {

            if (error) {
                console.log("error in creating post");
                return;
            }
            return res.redirect('/user/profile/todo');
        });


    }
    else {
        // looking for what should I show will do later 

        console.log(req.user);

    }
    // this is use to find length of JSON Object 



}


module.exports.deletenotes=function(req,res)
{
    const id = req.query.id;
    // this is function will find out and delete our contact 

    Todo.findByIdAndDelete(id, function (error) {

        if (error) {
            console.log("error during deleting notes");
            return;
        }
        return res.redirect('back');


    });


}
// module.exports.edit=function(req,res)
// {
//     const id =req.query.id;
//     let value;
//     Todo.findByIdAndUpdate(id,{Content:req.body.routine},function(error,user){
//         if(error)
//         {
//             console.log("error during updates");
//         }
//         console.log("updatation done");
//         return res.redirect('back');

//     });



// }
