import React, { useState } from 'react'
import { addTask } from '../slices/taskSlices';
import { useDispatch } from 'react-redux';

const TaskAddition = () => {
  const dispatch = useDispatch();
  const [singleTask, setSingleTask] = useState({ title:'', description:'' })
  const [allTask, setAllTask] = useState([]);

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (singleTask.title && singleTask.description) {
      setAllTask((prev)=>([...prev, singleTask]));
      setSingleTask({title:'', description:''})
      dispatch(addTask(singleTask));
    }
  }
  const handlerTitle = (e) => {
    setSingleTask((prev)=>({
      ...prev, title:e.target.value
    }))
  }
  const handlerDescription = (e) => {
    setSingleTask((prev)=>({
      ...prev, description:e.target.value
    }))
  }
  console.log(allTask);

  return (
    <>
        <div className='w-[70%] border p-5'>
            <form onSubmit={handlerFormSubmit} className='flex flex-col gap-3'>
              <h2>Title</h2>
              <input onChange={handlerTitle} value={singleTask.title} type="text" className='border border-gray-300' />
              <h2>Description</h2>
              <input onChange={handlerDescription} value={singleTask.description} type="text" className='border border-gray-300' />
              <button type='submit' className='rounded-md w-fit px-5 py-1 bg-orange-300 hover:bg-orange-200'>Add Task</button>
            </form>
        </div>
    </>
  )
}

export default  TaskAddition;
