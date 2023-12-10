import { useDispatch, useSelector } from "react-redux"

const FirstComp = () => {
  return(
    <SecondComp />
  )
}
const SecondComp = () => {
  const count = useSelector(s => s.reducer.count);
  return (
    count
  )
}


function App() {

  const dispatch = useDispatch()
  
  const handlerClick1 = () => {
    dispatch({
      type: 'incrementValue',
    })
  }
  const handlerClick2 = () => {
    dispatch({
      type: 'decrementValue',
    })
  }

  return (

    <>
      <button onClick={handlerClick1}>Inc</button>
      <button onClick={handlerClick2}>Dec</button>
      <FirstComp />
    </>
  )
}

export default App
