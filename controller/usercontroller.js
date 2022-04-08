const User = require('../model/user');


module.exports.profile = function (req, res) {
    return res.render('profile');
}
module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile');


    }
    return res.render('user_sign_up', { title: 'signup' });
}
module.exports.signin = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile');


    }
    return res.render('user_sign_in', { title: 'signin' });
}

// signup controller
module.exports.create = function (req, res) {
    
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, function (error, user) {

        if (error) {
            console.log("Hey Anshu procoder you're getting error during your find one condition in create controller");
            retrun;
        }
        if (!user) {

            
            User.create({
                email:req.body.email,
                passward:req.body.password,
                name:req.body.name
            }, function (error, user) {

                if (error) {
                    console.log("Hey Anshu procoder you're getting error during your find one condition in create ");
                    retrun ;

                }
               
                return res.redirect('/user/signin');

            });
        }
        else{
            return res.redirect('back');
        }



    });
}

// sign in and create a session for user
module.exports.createSession=function(req,res)
{
    return res.redirect('/user/profile');

}

//signout controller
module.exports.destroysession=function(req,res)
{
    req.logout();
    return res.redirect('/');
}