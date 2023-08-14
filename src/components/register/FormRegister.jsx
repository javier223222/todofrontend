import { Box, Button } from '@mui/material'
import TextFields from './TextFields'


const FormRegister = (props) => {
  const datatextfields=[{id:"name",name:"name",label:"Ingrese su nombre",autoComplete:"name"},{id:"apellidop",name:"apellidop",label:"Ingrese su apellido paterno",autoComplete:"apellidop"},{id:"apellidom",name:"apellidom",label:"Ingrese su apellido materno",autoComplete:"apellidom"},{id:"email",name:"email",label:"Ingrese su email",autoComplete:"email"},{id:"password",name:"password",label:"Ingrese una nueva contraseña",autoComplete:"password"}]
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
    Registrarse

     </Button>

    

   </Box>
  )
}

export default FormRegister