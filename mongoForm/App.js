const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const express = require('express')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect('mongodb://127.0.0.1:27017/Disco')
  .then(() => console.log('Connected!'));

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    contact:{type:String},
    gender:{type:String},
    hobby:{type:Array}
});

const user=mongoose.model("form",userSchema);


app.get('/',function(req,res){
  res.sendFile(__dirname+'/view/index.html')
})

app.post('/insert',function(req,res){
  user.create(req.body);
  res.redirect('/');
})

app.listen('8088')