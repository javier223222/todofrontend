import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline, Grid, Paper, createTheme } from '@mui/material'
import React from 'react'
import ImageFondo from '../../components/Login/ImageFondo'
import { backgroundImage } from '../../exports'
import TypoImg from '../../components/Login/TypoImg'
import FormRegister from '../../components/register/FormRegister'
import { useForm } from '../../hooks/useForm'
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2"
import axios from 'axios'
import { useNavigate } from 'react-router'


const Register = props => {
  const theme=createTheme()
  const {name,apellidop,apellidom,email,password,onInputChange,onResetForm}=useForm({
    name:null,
    apellidop:null,
    apellidom:null,
    email:null,
    password:null
  })
  const navigate=useNavigate()
  const handleSubmit= async ()=>{
    if(!name && !apellidop && !apellidom && !email && !password){
   await sweet("Necesite llenar todos los cambios para registrarse")

    }else{
     const res= axios.post("http://localhost:3001/regisiter",{
        email:email,nombre:name,apellidop:apellidop,apellidom:apellidom,password:password
      })

      
      if((await res).data=="El usuario fue agregado correctamente"){
           sweetSucess("El usuario fue agregado correctamente")
           navigate("/",{
            replace:true
           })          
      }else{
        sweet("Error al registar el usuario")
      }

    }
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
 const sweetSucess= async (name)=>{
  const MySwal=withReactContent(Swal)
   await MySwal.fire({
     title:<strong>Exito</strong>,
     html:<i>{name}</i>,
     icon:"success",
     confirmButtonColor:"#0F9BF2 "
     
   })
}
  return (
    <ThemeProvider theme={theme}>
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
           
            
            }
           }
          >
            <TypoImg tittle="Registrarse"></TypoImg>
            <FormRegister onInputChange={onInputChange} handleSubmit={handleSubmit}></FormRegister>
            
          </Box>
        </Grid>
       </Grid>


    </ThemeProvider>
  )
}


export default Register