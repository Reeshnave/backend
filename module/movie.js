const mongoose =require('mongoose')
const movieSchema = new mongoose.Schema({
    Tittle: String,
    Discriptbion:String,
    Catogary:String,
    Language:String,
    image:String
  });
  const Movie = mongoose.model('Movie', movieSchema);
  module.exports=Movie;