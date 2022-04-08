// const { authenticate } = require('passport'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');


// authentication using passport
// The LocalStrategy constructor takes a verify function as an argument, which accepts username and password as arguments.
// When authenticating a request, the strategy parses a username and password, which are submitted via an HTML form to 
// the web application. The strategy then calls the verify function with those credentials. 


passport.use(new LocalStrategy({
    usernameField: 'email'
}, function (email, password, done) {

    // find user by email id 
    User.findOne({ email: email }, function (error, user) {
        if (error) {
            console.log("Error in finding user in passport");
            return done(error);
        }
        if (!user || user.passward != password) {


            return done(null, false);
        }
        return done(null, user);

    });

}));


// serializing decide which key we are gonna put in cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// deserialixing the user from the key in cookies
passport.deserializeUser(function (id, done) {
    User.findById(id, function (error, user) {
        if (error) {
            console.log("Error in find by id function ");
            return done(error);
        }
        return done(null, user);

    });


});


// check if user is authenticated

passport.checkAuthentication = function (req, res, next) {
    // if user is signed in , then pass on request to the next function (controller's action)
    if (req.isAuthenticated()) {
        return next();


    }
    // if user is not signed in 

    return res.redirect('/user/signin');

}


passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    next();
}
module.exports = passport;