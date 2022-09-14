const mongoose = require('mongoose');
const marioSchema =new mongoose.Schema({
    name:{type:String,required:true},
    weight:{type:Number,required:true}
},{timestamps:true})

//  Your code goes here
const MarioModel=mongoose.model('mariochar',marioSchema);


module.exports = MarioModel;