const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/homecontroller');

console.log('router loaded');
router.get('/',homecontroller.home);
router.use('/user',require('./user'));
router.use('/posts',require('./post'));

module.exports=router;