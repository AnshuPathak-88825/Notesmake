//getting express package
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 9000;
const db = require('./config/mogooose');
const expressLayouts=require('express-ejs-layouts');

//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.use(cookieParser());



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    name: 'notemake',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000* 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
//use express router
app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));

app.listen(port, function (error) {
    if (error) {
        console.log("error in listen");
    }
    console.log("Server is running one port", port);
})

