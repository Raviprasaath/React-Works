import { useDispatch, useSelector } from "react-redux"
import { invokeAPIFetch } from "./action";

function App() {

  const dispatch = useDispatch()
  const postArray = useSelector(s => s.reducer.response);

  
  const handlerClick1 = () => {
    invokeAPIClick();
  }

  const invokeAPIClick = () => {
    dispatch(invokeAPIFetch())
  }

  return (

    <>
      <button onClick={handlerClick1}>Fetch</button>
      {postArray?.login}
    </>
  )
}

export default App
