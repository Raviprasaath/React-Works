import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { totalTasks, error } = useSelector((state)=>state.task);
  console.log(error);
  return (
    <>
      <h1 className='text-center text-lg font-bold'>Task Manager</h1>
      <p className='text-center'>Number of Tasks {totalTasks.length}</p>


      {
      (error !== '') ? <h5 className='text-center text-red-500'>{error}</h5> : null 
      }
    </>
  )
}

export default Navbar;
