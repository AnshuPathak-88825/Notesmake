const express=require('express');
const router=express.Router();

const Book_controller=require('../controller/Book_controller');

router.get('/Book',Book_controller.Booklist_viewwe);
router.post('/Bookcreate',Book_controller.create);
router.get('/Bookdelete',Book_controller.delete);



module.exports=router;