 const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');


module.exports = function(app) {

    app.get(`/api/workouts`, async (req, res) => {
        let workouts = await Workout.find();
        return res.status(200).send(workouts);
      });

    app.get(`/api/workouts/range`, async (req, res) => {
        let workouts = await Workout.find();
        return res.status(200).send(workouts);
      });  
    
      app.post(`/api/workouts`, async (req, res) => {
        let workout = await Workout.create(req.body);
        return res.status(201).send({
          error: false,
          workout
        });
      });
    
    app.put(`/api/workouts/:id`, async ({ body, params }, res) => {
        //const {id} = req.params;
        //MyClass.findById(req.params.id)
    
        let workout = await Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } },
          { new: true }
        )
    
        return res.status(202).send({
          error: false,
          workout
        })
        .catch(error => {
          console.log("error")
        })
    
      });
    
      app.delete(`/api/workout/:id`, async (req, res) => {
        const {id} = req.params._id;
    
        let workout = await Workout.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          workout
        })
    
      })
    //app.get("/api/workouts", (req, res) => {
    //    db.Workout.
    //      
    //            day: 
    //            
    //        }
    //    }])
    //    .then(dbWorkouts => {
    //        res.json(dbWorkouts);
    //    })
    //    .catch(err => {
    //        res.json(err);
    //    })
    //});
//
    //app.post("/api/workouts", (req, res) => {
    //    db.Workout.create({})
    //    .then(workout => {
    //        res.json(workout);
    //    }).catch(err => {
    //        console.log(err);
    //    })
    //});
//
    //app.put("/api/workouts/:id", (req, res) => {
    //
    //        res.json(exercise);
    //    }).catch(err => {
    //        console.log(err);
    //    })
    //});
//
    //app.get("/api/workouts/range", (req, res) => {
 
    //            }
    //        }
    //    ])
    //    .then(workouts => {
    //        res.json(workouts);
    //    }).catch(err => {
    //        console.log(err);
    //    })
    //});

};