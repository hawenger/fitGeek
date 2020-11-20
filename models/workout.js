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