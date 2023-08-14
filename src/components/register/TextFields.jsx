import { TextField } from '@mui/material'
import React from 'react'


const TextFields = props => {
 const texts=props.elements.map(x=><TextField  variant="standard"
 margin='normal'
 required
 fullWidth
 id={`${x.id}`}
 name={`${x.name}`}
 label={`${x.label}`}
 autoComplete={`${x.autoComplete}`}
autoFocus
onChange={props.onInputChange}
 ></TextField>)
  return (
    <>
    {texts}
    </>
  )
}



export default TextFields