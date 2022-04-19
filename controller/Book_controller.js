const Book=require('../model/Book');
module.exports.Booklist_viewwe=function(req,res)
{
    Book.find({ user: req.user._id }, function (error, link) {

        if (error) {
            console.log("error during fectching data from database");
        }
        return res.render('book_view', { book_list: link});


    });
}
module.exports.create=function(req,res)
{
    Book.create({Book:req.body.Bookname,user:req.user._id },function(error,book){
        if(error)
        {
            console.log("error in book  create function");
        }
    return res.redirect('/user/profile/Book');


    })
}
module.exports.delete = function (req, res) {
    const id = req.query.id;
    // this is function will find out and delete our contact 

    Book.findByIdAndDelete(id, function (error) {

        if (error) {
            console.log("error during deleting notes");
            return;
        }
        return res.redirect('back');


    });
}