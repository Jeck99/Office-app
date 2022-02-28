const mongoose = require('mongoose');

const Employee = new mongoose.Schema({
    firstName:String,
    lastName:{type:String, required:true},
    email:String, 
    age:Number
},
{timestamps:true}
);

module.exports = mongoose.model('Employee', Employee);