var mysql =require('mysql');

var con = mysql.createConnection({
    host :'localhost',
    user :'root',
    password :'',
    database :'no'
});

con.connect();
console.log("Connected..");

var name = "devil";
var email ="dex@gmail.com"
var contact ="45"

// var add = "insert into data(name,email,contact) value('"+name+"','"+email+"','"+contact+"')"
var del ="delete from data where id=3"
// var upd = "update data set name ='Moonnight' where id=1"

con.query(del,function(error, results, fields) {
  if (error) throw error;
  console.log("NOKIA CONNECTED PEOPLE");
//   console.log('The solution is: ', results[0].solution);
});

// con.end();

