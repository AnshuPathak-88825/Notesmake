//getting express package
const express=require('express');
// express is function 
const app=express();
const port=8000;

app.use('/',require('./routes/index'));//mode to get request from index.js





app.listen(port,function(error){
    if(error)
    {
        console.log("error in listen");
    }
})

