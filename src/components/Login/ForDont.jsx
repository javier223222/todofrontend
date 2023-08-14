import { Grid} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'





const ForDont = () => {
  return (
   <Grid
    container
    className='d-flex align-items-center justify-content-center '
    

   >
   
    <Grid item>
        <Link
         to={"/register"}
         className='register'
          variant='body2'>
            No tienes cuenta? Crea una

        </Link>

    </Grid>

   </Grid>
  )
}


export default ForDont