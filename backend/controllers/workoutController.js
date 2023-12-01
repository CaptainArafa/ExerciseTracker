const Workout = require('../models/workout')
const mongoose = require('mongoose')



//get all workouts
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body
    //add doc to db
    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
       res.status(400).json({"error":error.message})
    }
}

//update workout
const updateWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}


//delete workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    try {
        const workout = await Workout.findOneAndDelete({_id:id})
        res.status(200).json(workout)
        if (!workout){
            return res.status(404).json({error: 'no such workout'})
        }
        
    } catch (error) {
        res.status(400).json({'error': 'no such workout'})
    }
}

module.exports = {createWorkout,getWorkout,getWorkouts,updateWorkout,deleteWorkout}