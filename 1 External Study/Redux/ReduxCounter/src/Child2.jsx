import { useState } from "react";
import { useDispatch } from "react-redux";
import * as action from "./action"; // Importing all actions from action.js

const Child2 = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handlerClickInc = () => {
    setCounter((prev) => prev + 1);
    dispatch(action.setChangedValue(counter + 1));
  };

  const handlerClickDec = () => {
    setCounter((prev) => prev - 1);
    dispatch(action.setChangedValue(counter - 1));
  };

  return (
    <>
      <button onClick={handlerClickInc}>Inc</button>
      <button onClick={handlerClickDec}>Dec</button>
    </>
  );
};

export default Child2;
