import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline, Grid, Paper, createTheme } from '@mui/material'
import React, { useState } from 'react'
import ImageFondo from '../../components/Login/ImageFondo'
import { backgroundImage } from '../../exports'
import TypoImg from '../../components/Login/TypoImg'
import "../../css/login.css"
import FormLogin from '../../components/Login/FormLogin'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import Swal from "sweetalert2"

import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router'
const Login = () => {
  const theme=createTheme()
  const {email,password,onInputChange,onResetForm}=useForm({
    email:null,
    password:null
  })

  const navigate=useNavigate()
  const handleSubmit=  ()=>{
    console.log(email,password)
    
    if(!email && !password){
     sweet("Necesitas llenar todos los cambios")
     
    }else{
      axios.post("http://localhost:3001/login",{
        email:email,password:password
      }).then((res)=>{
        if(res.data[0].idusers){
          console.log(res.data)
          changelocal()
  
          navigate("/home",{
            replace:true,
            state:{id:res.data[0].idusers}
  
          })
          onResetForm()
        }else{
         sweet("El usuario no existe")
        }
       
      })
     
     
      
    }
    
 
      
  }
  const changelocal=()=>{
    localStorage.setItem("acessToken","true")
  }
  const sweet= async (name)=>{
     const MySwal=withReactContent(Swal)
      await MySwal.fire({
        title:<strong>Error</strong>,
        html:<i>{name}</i>,
        icon:"error",
        confirmButtonColor:"#0F9BF2 "
        
      })
  }
  return (
    <ThemeProvider theme={theme} >
       <Grid container component="main" sx={{height:'100vh'}} >
        <CssBaseline></CssBaseline>
        <ImageFondo image={backgroundImage}></ImageFondo>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
           sx={
            {
              my:8,
              mx:4,
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:"center",
              marginTop:`11rem`
            
            }
           }
          >
            <TypoImg tittle="Iniciar sesion"></TypoImg>
            <FormLogin handleSubmit={handleSubmit} onInputChange={onInputChange}></FormLogin>
          </Box>
        </Grid>
       </Grid>

    </ThemeProvider>
  )
}



export default Login