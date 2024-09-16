import React from 'react'
import ExerciseList from '../features/exercises/ExerciseList'
import AddExercise from '../features/exercises/AddExercise'

const Home = () => {
  return (
    <div>
      <AddExercise/>
      <ExerciseList/>
    </div>
  )
}

export default Home
