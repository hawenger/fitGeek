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
//let workoutSeed = [
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-9)),
//      exercises: [
//        {
//          type: "resistance",
//          name: "Bicep Curl",
//          duration: 20,
//          weight: 100,
//          reps: 10,
//          sets: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-8)),
//      exercises: [
//        {
//          type: "resistance",
//          name: "Lateral Pull",
//          duration: 20,
//          weight: 300,
//          reps: 10,
//          sets: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-7)),
//      exercises: [
//        {
//          type: "resistance",
//          name: "Push Press",
//          duration: 25,
//          weight: 185,
//          reps: 8,
//          sets: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-6)),
//      exercises: [
//        {
//          type: "cardio",
//          name: "Running",
//          duration: 25,
//          distance: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-5)),
//      exercises: [
//        {
//          type: "resistance",
//          name: "Bench Press",
//          duration: 20,
//          weight: 285,
//          reps: 10,
//          sets: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate()-4)),
//      exercises: [
//        {
//          type: "resistance",
//          name: "Bench Press",
//          duration: 20,
//          weight: 300,
//          reps: 10,
//          sets: 4
//        }
//      ]
//    },
//    {
//      day: new Date(new Date().setDate(new Date().getDate() - 3)),
//      exercises: [
//      
//   
//workoutSeed.forEach(element => {
//   let workout = new Workout ({element});
//   workout.save();
    
//});
const workout = new Workout({
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
});

  workout.save();

//  const workout = new Workout({
//    day: new Date(new Date().setDate(new Date().getDate() - 1)),
//    exercises: [
//        {
//            type: "resistance",
//            name: "Bench Press",
//            duration: 20,
//            weight: 300,
//            reps: 10,
//            sets: 4
//          }
//    ]
//});
//
//workout.save();
//
//const workout = new Workout({
//    day: new Date(new Date().setDate(new Date().getDate() - 1)),
//    exercises: [
//        {
//            type: "resistance",
//            name: "Quad Press",
//            duration: 30,
//            weight: 300,
//            reps: 10,
//            sets: 4
//          }
//    ]
//});
//
//workout.save();
//
//