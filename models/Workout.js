const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Enter a name for excercise',
      },
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      duration: {
        type: Number,
        required: 'Enter an amount',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model('Excercise', workoutSchema);

module.exports = Workout;
