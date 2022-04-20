const express = require('express');
const router = express.Router();
const moviecontroller=require('../controller/movie_controller');

router.get('/movie',moviecontroller.movie_view);
router.post('/moviecreate',moviecontroller.moviecreate);

router.get('/deletemovie',moviecontroller.deletemovie);
module.exports=router;
