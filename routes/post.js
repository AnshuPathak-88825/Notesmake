const express=require('express');
const router=express.Router();

const postcontroller=require('../controller/post_controller');
router.post('/create',postcontroller.create);
router.get('/addnote',postcontroller.addnote);

module.exports=router;