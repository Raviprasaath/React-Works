import { useRef, useState } from 'react'


function App() {
  const [startTime, setStartTime] = useState(null);
  const [timeNow, setTimeNow] = useState(null);
  const timeRef = useRef(null);

  const handlerStart = () => {
    setStartTime(Date.now());
    setTimeNow(Date.now());
    clearInterval(timeRef.current);
    timeRef.current = setInterval(()=>{
      setTimeNow(Date.now());
    }, 100)
  }
  const handlerStop = () => {
    clearInterval(timeRef.current);
  }
  let secondPassed = 0;
  if (startTime != null && timeNow != null) {
    secondPassed = (timeNow - startTime) / 1000;
  }

  return (
    <>
      <p>Time Now: {secondPassed}</p>
      <button onClick={handlerStart}>Start</button>
      <button onClick={handlerStop}>Stop</button>
    </>
  )
}

export default App
