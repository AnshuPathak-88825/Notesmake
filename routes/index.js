const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/homecontroller');

router.get('/',homecontroller.home);

module.exports=router;