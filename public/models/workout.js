const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fitGeekDB', { useNewUrlParser: true });

const workoutSchema = new mongoose.Schema ({
    day: Date,
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }
});
const Workout = mongoose.model("Workout", workoutSchema);


module.export = Workout;