var mysql = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login'
})

con.connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.post('/meto',function(req,res){
    console.log(req.body.name)
})

console.log("done");

app.listen(8080);