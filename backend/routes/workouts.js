const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()

//GET all workouts
router.get('/',(req,res)=>{
    res.json({"mssg":"get all workouts"})
})
//GET single workouts
router.get('/:id',(req,res)=>{
    res.json({"mssg":"get single workout"})
})
//POST new workout
router.post('/', async (req,res)=>{
    const {title,reps,load} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
       res.status(400).json({"error":error.message})
    }
  
})
//Delete aworkout
router.delete('/:id',(req,res)=>{
    res.json({"mssg":"delete a workout"})
})
//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({"mssg":"update a workout"})
})

module.exports = router