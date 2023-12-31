import React, { useState } from 'react'

const WorkoutForm = () => {

    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit =async (e) =>{
      e.preventDefault()

      const workout = {title,load,reps}

      const response = await fetch('/api/workouts',{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const json = await response.json()
      if(!response.ok){
        setError(json.error)
      }
      else{
        setTitle('')
        setReps('')
        setLoad('')
        setError(null)
        console.log('new workout added')
      }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add new Workout</h3>
        <label>Exercise Title</label>
        <input
         type='text'
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         ></input>
         <label>load</label>
         <input
         type='number'
         value={load}
         onChange={(e)=>setLoad(e.target.value)}
         ></input>
         <label>reps</label>
         <input
         type='number'
         value={reps}
         onChange={(e)=>setReps(e.target.value)}
         ></input>
         <button>Add Workout</button>
         {error && <div>{error}</div>}
    </form>
  )
}

export default WorkoutForm