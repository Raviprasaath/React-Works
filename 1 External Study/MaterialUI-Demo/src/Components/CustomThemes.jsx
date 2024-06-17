import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CustomThemes = () => {
  return (
    <Box>
        <Typography>Inside Default theme Viewer - we have Default values </Typography>
        <Typography>Exapnd All</Typography>
        <Typography>Create a new file - Name - Theme.js </Typography>
        <Typography>Check the file - inside createTheme we write as per the hierachy</Typography>
        <Typography>
            Then in Main.js file wrap with Themeprovider inside theme=needs to give the our newly create file name
        </Typography>
        <Button variant='contained' >
            Custom Theme
        </Button>
        <Typography>Now in the above button no color is added which means it takes default main color, and now we overwritten the Color</Typography>
    </Box>
  )
}

export default CustomThemes