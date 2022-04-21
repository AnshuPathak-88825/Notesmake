const Moviedb=require('../model/moviedb');
module.exports.movie_view=function(req,res)
{
    Moviedb.find({ user: req.user._id }, function (error, movie) {

        if (error) {
            console.log("error during fectching data from database");
        }
        return res.render('movie_view', { Movie_info: movie});


    });
}
module.exports.moviecreate=function(req,res)
{
    console.log(req.body);
    Moviedb.create({Moviename:req.body.moviename,Done:0,user:req.user._id},function(error){
        if(error)
        {
            console.log("there is an error during create movie schema");
            return ;
        }
        return res.redirect('/user/profile/movie');
    })
    
}

module.exports.deletemovie = function (req, res) {
    // console.log(req.body);
    const id = req.query.id;
    // this is function will find out and delete our contact 

    Moviedb.findByIdAndDelete(id, function (error) {

        if (error) {
            console.log("error during deleting notes");
            return;
        }
        return res.redirect('back');


    });
}