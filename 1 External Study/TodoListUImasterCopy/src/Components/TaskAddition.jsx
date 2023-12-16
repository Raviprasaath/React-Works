import React from 'react'

const TaskAddition = () => {
  return (
    <>
        <div className='flex flex-col w-[70%] gap-2 border p-5 m-2'>
            <h2>Title</h2>
            <input type="text" className='border border-gray-300' />
            <h2>Description</h2>
            <input type="text" className='border border-gray-300' />
            <button className='rounded-md w-fit px-5 py-1 bg-orange-300 hover:bg-orange-200'>Add Task</button>
        </div>
    </>
  )
}

export default TaskAddition
