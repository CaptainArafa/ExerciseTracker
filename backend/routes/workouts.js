const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()
const {createWorkout,getWorkout,getWorkouts,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

//GET all workouts
router.get('/',getWorkouts)
//GET single workouts
router.get('/:id',getWorkout)
//POST new workout
router.post('/',createWorkout)
//Delete aworkout
router.delete('/:id',deleteWorkout)
//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router