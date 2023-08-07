import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Grid, createTheme } from '@mui/material'
import React from 'react'


const Login = () => {
  const theme=createTheme()
  return (
    <ThemeProvider theme={theme}>
       <Grid container component="main" sx={{height:'100vh'}}>
        <CssBaseline></CssBaseline>

       </Grid>

    </ThemeProvider>
  )
}



export default Login