const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for cardio exercise',
  },
  duration: {
    type: Number,
    required: 'Enter an amount',
  },
  distance: {
    type: Numer,
    required: 'Enter an amount',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Cardio = mongoose.model('Cardio', cardioSchema);

module.exports = Cardio;