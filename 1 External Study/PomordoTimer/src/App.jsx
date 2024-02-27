import { useRef, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState({
    minutes: 25,
    seconds: 0
  });

  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(({ minutes, seconds }) => {
        if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        }
        return { minutes, seconds: seconds - 1 };
      });
    }, 1000);
  };

  console.log("render")

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer({ minutes: 25, seconds: 0 });
  };

  return (
    <div className="App">
      <h1>
        {timer.minutes} {timer.seconds.toString().padStart(2, "0")}
      </h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
