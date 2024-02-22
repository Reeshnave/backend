const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    persons : {
        type: mongoose.ObjectId,
        ref : 'Persons'

    },

   movie : {
        type: mongoose.ObjectId,
        ref : 'Movie'

    },

    role :String
});
const Cast = mongoose.model('Cast',castSchema);
module.exports=Cast;