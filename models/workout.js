const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema ({
    day: { type: Date, default: Date.now},
    exercises: [{
        
    }]
});
const Workout = mongoose.model("Workout", workoutSchema);


module.export = Workout;