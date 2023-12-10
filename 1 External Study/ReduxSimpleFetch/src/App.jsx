import { useDispatch, useSelector } from "react-redux"

function App() {

  const dispatch = useDispatch()
  const postArray = useSelector(s => s.reducer.response);

  
  const handlerClick1 = () => {
    invokeAPIClick();
  }

  const invokeAPIClick = () => {
    fetch('https://api.github.com/users/Raviprasaath')
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: 'invokingAPI',
        payload: result
      })
    })
  }

  return (

    <>
      <button onClick={handlerClick1}>Fetch</button>
      {postArray?.login}
    </>
  )
}

export default App
