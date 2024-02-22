const mongoose =require('mongoose')
const personsSchema = new mongoose.Schema({
   Image :String,
   name : String,
   occupation :String,
   Birthplace :String, 
   Born :String
  });
  const Persons = mongoose.model('Persons', personsSchema);
  module.exports=Persons;