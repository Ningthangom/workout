const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        distance:Number
      }
    ]
  

});

const Workout = mongoose.model("workout", workoutSchema);
console.log("Workout: ", Workout)

module.exports = Workout;
