import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask } from './slice';

function App() {
  const dispatch = useDispatch();

  const { task2 } = useSelector(state=>state.todo);

  console.log("after slice", task2);

  useEffect(()=> {
    dispatch(addTask("z"));
  }, [])

  return (
    <>
      Hi
    </>
  )
}

export default App