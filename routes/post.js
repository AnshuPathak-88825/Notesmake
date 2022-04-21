const express=require('express');
const router=express.Router();
const passport = require('passport');

const postcontroller=require('../controller/post_controller');
router.post('/create',postcontroller.create);

// use passport here of to checkAuthentication of user is present or not 
router.get('/addnote',passport.checkAuthentication,postcontroller.addnote);
router.get('/delete',postcontroller.deletenote);
router.get('/read',postcontroller.readnotes);

router.get('/edit',postcontroller.edit);
router.post('/update',postcontroller.update);




module.exports=router;