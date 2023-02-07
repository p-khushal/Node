	const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Disco')
  .then(() => console.log('Connected!'));

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    default:'King'
  },
  Email:{
    type:String,
    default:'king@gmail.com'
  }
})

const user=mongoose.model("User",userSchema);

const use =new user;

use.save();