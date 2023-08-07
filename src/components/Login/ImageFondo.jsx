import { Grid } from '@mui/material'
import React from 'react'


const ImageFondo = props => {
  return (
    <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
        backgroundImage:`url(${props.image})`,
        backgroundRepeat:'no-repeat',
        backgroundColor:"#4B8CA6",
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    />
  )
}



export default ImageFondo