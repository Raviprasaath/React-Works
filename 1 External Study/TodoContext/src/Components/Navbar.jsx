import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const Navbar = () => {
  const { state } = useContext(TaskContext);
  return (
    <>
      <h1 className='text-center text-lg font-bold'>Task Manager</h1>
      <p className='text-center'>Number of Tasks {state.allTask.length}</p>
    </>
  )
}

export default Navbar
