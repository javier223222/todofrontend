import { Button, Input } from '@mui/material'
import React from 'react'

const SelectDayOptional = (props) => {
    const stilo=props.noempty?'fill':'height'
  return (
    <div className={props.showoptioncalendar?'d-flex flex-column align-items-center dates '+stilo:'novisbility'}>
         
            <p className='colordate'>Elige una fecha</p>
            <Input type='date' className='inputcalendar' name='venciment' onChange={props.selectdDate} ></Input>
            <Button variant="contained" onClick={props.savedate} className='add-date'>Agregar Fecha</Button>
    </div>
  )
}

export default SelectDayOptional