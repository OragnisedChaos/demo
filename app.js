const express = require('express');
const mongoose=require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:127.0.0.1:27017/yelpCamp');
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error:"));
db.once("open",()=>{
    console.log("DataBase Connected");
});
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.render('Home');
})


app.listen(3000, ()=>{
    console.log('Serving om 3000');
})