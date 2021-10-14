const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for resistance exercise',
  },
  duration: {
    type: Number,
    required: 'Enter an amount',
  },
  weight: {
    type: Number,
    required: 'Enter an amount',
  },
  reps: {
    type: Number,
    required: 'Enter an amount',
  },
  sets: {
    type: Number,
    required: 'Enter an amount',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Resistance = mongoose.model('Resistance', resistanceSchema);

module.exports = Resistance;
