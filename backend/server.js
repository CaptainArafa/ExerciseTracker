const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const workoutRoutes = require('./routes/workouts')
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()

})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
app.listen(PORT,()=>{
    console.log(`connected to db and listening on port`,PORT)
})
})
.catch((error)=>{
    console.log(error)
})
