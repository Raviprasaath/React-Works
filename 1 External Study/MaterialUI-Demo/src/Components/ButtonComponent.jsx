import Button from '@mui/material/Button'
import React from 'react'

const ButtonComponent = () => {
  return (
    <>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <br />
        <br />
        <br />
        <br />
        <Button variant="contained" disabled >Disabled</Button>
        <br />
        <br />
        <Button color='error' onClick={()=>console.log('clicked')} variant="contained" disableElevation >Contain</Button>
        <br />
        <br />

    </>
  )
}

export default ButtonComponent