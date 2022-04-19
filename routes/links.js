const express=require('express');
const router=express.Router();

const linkcontroller=require('../controller/link_controller');
router.get('/link',linkcontroller.linkviewer);
router.get('/deletelink',linkcontroller.delete);

router.post('/create',linkcontroller.create);


module.exports=router;