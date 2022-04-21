const mongoose=require('mongoose');

const DBURL2= 'mongodb://127.0.0.1/notemake'
const DBURL = 'mongodb+srv://Anshu:SbJm5Wkx7TVmHEeJ@cluster0.4f56l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(DBURL2);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to db"));
db.once('open',function(){
    console.log("successfully connected to the database");
});
console.log("mongoose connected");
module.exports=db;

