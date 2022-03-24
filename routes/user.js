const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/usercontroller');

router.get('/profile',homecontroller.profile);

module.exports=router;