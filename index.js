//getting express package
const express=require('express');
// express is function 
const cookieParser=require('cookie-parser');
const app=express();
const port=9000;

const db=require('./config/mogooose');
app.use(express.urlencoded());  
app.use(cookieParser());



app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));

app.listen(port,function(error){
    if(error)
    {
        console.log("error in listen");
    }
    console.log("Server is running one port",port);
})

