const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String
      },
      name:{
        type: String
      },
      
        duration:{
          type: Number
        },
        distance:{
          type:Number
        },
        weight:{
          type: Number,
          min: 0
        },
        reps:{
          type:Number,
          min:0
        },
        sets:{
          type: Number
        } 
      }
    
    ]
  

});

const Workout = mongoose.model("workout", workoutSchema);
console.log("Workout: ", Workout)

module.exports = Workout;
