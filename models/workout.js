const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const workoutSchema = new mongoose.Schema ({
    day: { type: Date, default: Date.now},
    exercises: [{
        
    }]
});
const Workout = mongoose.model("Workout", workoutSchema);


module.export = Workout;

const workout = new Workout({
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "resistance",
        name: "Dance Lift",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
});

  workout.save();

