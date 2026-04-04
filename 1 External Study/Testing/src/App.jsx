import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChartComponent from './BarChartComponent';

function App() {
  const [type, setType] = useState("");



  return (
    <>
      <BarChartComponent />
    </>
  )
}

export default App
