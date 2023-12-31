import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='workoutDetails-Container'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails