import React, { useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function expensive(num) {
    for(let i=0; i<10000; i++) {
      num += i;
    }
    return num;
  }

  const handlerNum = () => {
    setCount((prev)=>prev+1);
  }
  const ans = useMemo(()=>expensive(count), [count]);

  return (
    <>
      <button onClick={()=>handlerNum()}>Click</button>
      <p>{ans}</p>
    </>
  )
}

export default App
