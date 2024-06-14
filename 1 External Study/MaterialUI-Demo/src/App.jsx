import { useState } from 'react'
import Setup from './Setup'
import TypographyComponent from './Components/TypographyComponent'
import ButtonComponent from './Components/ButtonComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Setup />
        <br />
        <br />
        <br />
      </div>
      <div>
        <TypographyComponent />
        <br />
        <br />
        <br />
        <br />
        <ButtonComponent />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
