var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'no'
})

con.connect();
console.log("NOKIA CONNECTED PEOPLE");

var app = express();

var add = "insert into data(name,email,contact) value('vasu','vasu@gmail.com','89454')"
var del = "delete from data where id=4"


app.get('/', function (req, res) {
    res.send('devil')
})

app.get('/about', function (req, res) {
    res.send('Emiway Bantai')
})

app.get('/insert', function (req, res) {
    res.send(
        con.query(add, function (error, results, fields){
            if (error) throw error;
            console.log("Walima")
        })
    )
})
app.get('/delete', function (req, res) {
    res.send(
        con.query(del, function (error, results, fields){
            if (error) throw error;
            console.log("Killer")
        })
    )
})



app.listen(8007)