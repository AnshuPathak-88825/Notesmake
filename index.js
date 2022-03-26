//getting express package
const express=require('express');
// express is function 
const app=express();
const port=9000;

const db=require('./config/mogooose');
app.use(express.urlencoded());

// using homecontroller


app.use('/',require('./routes'));//mod to get reques from index.js

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(error){
    if(error)
    {
        console.log("error in listen");
    }
    console.log("Server is running one port",port);
})

