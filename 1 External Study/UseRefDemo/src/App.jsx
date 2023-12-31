import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const textRef = useRef("");

  const handlerType = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  return (
    <>
      <input type="text" onChange={handlerType} />
      <div>Current : {text}</div>
      <div>Previous : {textRef.current}</div>
    </>
  )
}

export default App