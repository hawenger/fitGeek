const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app) {

    app.get(`/api/workouts`, async (req, res) => {
        let workouts = await Workout.find();
        return res.status(200).send(workouts);
      });
    
      app.post(`/api/workouts`, async (req, res) => {
        let workout = await Workout.create(req.body);
        return res.status(201).send({
          error: false,
          workout
        })
      })
    
      app.put(`/api/workout/:id`, async (req, res) => {
        const {id} = req.params;
    
        let workout = await Workout.findByIdAndUpdate(id, req.body);
    
        return res.status(202).send({
          error: false,
          workout
        })
    
      });
    
      app.delete(`/api/workout/:id`, async (req, res) => {
        const {id} = req.params;
    
        let workout = await Workout.findByIdAndDelete(id);
    
        return res.status(202).send({
          error: false,
          workout
        })
    
      })


};//