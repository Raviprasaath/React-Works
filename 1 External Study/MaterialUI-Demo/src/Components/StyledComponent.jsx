import { Box, Button, Container, Typography, styled } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    backgroundColor: 'blue',
    color:'white',
    '&:hover': {
        backgroundColor: 'red',
    }
})

const StyledComponent = () => {
  return (
    <>
        <Container>
            <Button variant='contained'>
                Container
            </Button>
            <br />
            <br />
            <br />
            <StyledButton>
                Container 2
            </StyledButton>
        </Container>
    </>
  )
}

export default StyledComponent