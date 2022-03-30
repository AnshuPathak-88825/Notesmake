const express=require('express');
const passport = require('passport');
const router=express.Router();
const usercontroller=require('../controller/usercontroller');

router.get('/profile',usercontroller.profile);
router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);

router.post('/create',usercontroller.create);
//use passport as middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect:'/user/signin'
    }
),usercontroller.createSession);

module.exports=router;