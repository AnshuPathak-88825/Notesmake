// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/profile-info');
// const db =mongoose.connection;
// db.on('error', console.error.bind(console, 'error connecting to db'));
// db.once('open',function(){
//     console.log("server created successfully");
// });
//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});