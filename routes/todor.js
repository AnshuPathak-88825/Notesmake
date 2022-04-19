const express = require("express");

const router=express.Router();
const todocontroller=require('../controller/to_docontroller');
router.get('/todo',todocontroller.view);
router.post('/todo/create/',todocontroller.create);
router.get('/delete',todocontroller.deletenotes);
// router.get('/edit',todocontroller.edit);

module.exports=router;
