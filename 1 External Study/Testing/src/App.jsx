import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [type, setType] = useState("");

  

  return (
    <>
      <form action="">
        <input type="text" onChange={(e)=>setType(e.target.value)} value={type} />
      </form>
    </>
  )
}

export default App
