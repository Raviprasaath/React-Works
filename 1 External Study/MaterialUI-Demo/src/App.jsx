import { useState } from 'react'
import Setup from './Setup'
import TypographyComponent from './Components/TypographyComponent'
import ButtonComponent from './Components/ButtonComponent'
import IconsComp from './Components/IconsComp'
import StyledComponent from './Components/StyledComponent'
import CustomThemes from './Components/CustomThemes'

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
        <br />
        <br />
        <br />
        <br />
        <IconsComp />
        <br />
        <br />
        <br />
        <br />
        <StyledComponent />
        <br />
        <br />
        <br />
        <br />
        <CustomThemes />

      </div>
    </>
  )
}

export default App
