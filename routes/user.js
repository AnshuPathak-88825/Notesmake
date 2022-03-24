const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/usercontroller');

router.get('/profile',homecontroller.profile);
router.get('/signup',homecontroller.signup);
router.get('/signin',homecontroller.signin);


module.exports=router;