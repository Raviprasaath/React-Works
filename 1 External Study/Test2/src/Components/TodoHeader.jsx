import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { taskAdd } from '../slice';

const TodoHeader = () => {
    const dispatch = useDispatch();
    const [typedVal, setTypedVal] = useState("");

    const handlerBtn = () => {
        dispatch(taskAdd(typedVal));
        setTypedVal("")
    }

  return (
    <div className='flex w-96 justify-center items-center'>
      <input type="text" name="todo" id="todo" onChange={(e)=>setTypedVal(e.target.value)} value={typedVal} className='border px-2 py-1' />
      <button className='bg-yellow-300 px-2 py-1 rounded m-2' onClick={handlerBtn} >Task Add</button>
    </div>
  )
}

export default TodoHeader
