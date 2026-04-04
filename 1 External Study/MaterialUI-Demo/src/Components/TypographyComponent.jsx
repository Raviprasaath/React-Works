import Typography from '@mui/material/Typography'
import React from 'react'

const TypographyComponent = () => {
  return (
    <>
      <Typography variant='h1' component='h5' >
        we can make the H1 styled component in H5 display, which is used for making the SEO, because in H1 we needs to use only once but by using this we can make many times
      </Typography>
      <Typography variant='h5' component='h1' align='center' sx={{backgroundColor:'red', color:'white', rotate:'2deg'}}>
        In this tag H5 is displayed in H5 component when we do the inspect it will show
      </Typography>
    </>
  )
}

export default TypographyComponent