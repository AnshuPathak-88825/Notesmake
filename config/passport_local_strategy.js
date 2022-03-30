const { authenticate } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');


//authentication using passport
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

// serializing the user to decide which key is used to kept in cookies
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


module.exports=passport;