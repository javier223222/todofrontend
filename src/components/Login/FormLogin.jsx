
import { Box, Button } from '@mui/material'
import React from 'react'
import ForDont from './ForDont'
import TextFields from '../register/TextFields'


const FormLogin = props => {
  const datatextfields=[{id:"email",name:"email",label:"Ingresa tu email",autoComplete:"email"},{id:"password",name:"password",label:"Ingrese la contraseña",autoComplete:"password"}]
  return (
    <Box component="form" sx={{mt:1}}>
     <TextFields elements={datatextfields} onInputChange={props.onInputChange}></TextFields>
     



      <Button
     type="button"
      fullWidth
      variant='contained'
      className='loginbutton'
      onClick={props.handleSubmit}
      sx={{mt:3,mb:2}}
      >
        Iniciar Sesion

      </Button>

      <ForDont></ForDont>

    </Box>
  )
}



export default FormLogin