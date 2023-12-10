import { Provider, useDispatch, useSelector } from "react-redux";
import { invokeAPI } from "./action";
import { store } from "./store"; 

const FirstComp = () => {
  return (
    <SecondComp />
  )
}

const SecondComp = () => {
  const count = useSelector(s => s.reducer.count);
  return (
    {count}
  )
}

function App () {
  const dispatch = useDispatch();
  const postArray = useSelector(state => state.reducer.post);

  const handlerClick = () => {
      dispatch({
        type: 'increment'
      })
  }

  const invokeAPIResponse = () => {
    dispatch(invokeAPI);
  }
  return (
    <>
    <Provider store={store}>
      <FirstComp />
      <button onClick={handlerClick}>
        Inc
      </button>
    </Provider>
    </>
  )
}


export default App;
