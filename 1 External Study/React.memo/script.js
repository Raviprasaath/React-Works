import React, { useState } from 'react'

const Home = React.memo(function Home(props) {
  console.log("re render");
  return (
    <>{props.name}</>
  )
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
      <p>Count: {count}</p>
      <Home name={"ravi"} /> 
    </>
  )
}

export default App
