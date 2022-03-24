//getting express package
const express=require('express');
// express is function 
const app=express();
const port=8000;
const db=require('./config/mogooose');
const user=require('./model/user');
app.use('/',require('./routes/index'));//mod to get reques from index.js
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(error){
    if(error)
    {
        console.log("error in listen");
    }
})

