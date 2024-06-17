import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

const IconsComp = () => {
  return (
    <>
        <p>inside Material Icon we needs to search</p>
        <SendIcon color='primary' />
        <br />
        <br />
        <br />
        <Button variant='contained' startIcon={<SendIcon />} >Send Button</Button>
        <br />
        <Button variant='contained' endIcon={<SendIcon />} >Send Button</Button>
    </>
  )
}

export default IconsComp