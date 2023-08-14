import React from 'react'
import Add from './Add'

import GenericIcons from './GenericIcons'
import { Button } from '@mui/material'
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2"
import { options } from '../../exports'
const BoxWork = (props) => {
    const sweet =()=>{
        const MySwal=withReactContent(Swal)
         MySwal.fire({
           title:<strong>Error</strong>,
           html:<i>No puede agregar tareas vacias</i>,
           icon:"error",
           confirmButtonColor:"#0F9BF2 "
           
         })
     }
     let component=null
     switch(props.optionselect){
      case "Hoy":
        component="Hoy"
        break;
      case "Mañana"  :
        component="Mañana"
        break;
        case "Semana próxima"  :
          component="Semana próxima"
          break;
         case null:
          component=null
          break;
          default:
            component=`Vence el ${new Date(new Date(props.optionselect).setDate(new Date(props.optionselect).getDate()+1)).toLocaleDateString("es-Es",options)}`
            break;

     }
  return (
     
    <div className={props.despegablenav?'boxtareamove p-2 d-flex flex-column':'boxtarea p-2 d-flex flex-column'}>
        <div className='d-flex'>
        <Add styles="addcol" add={props.add} handleclick={props.handleclick}></Add>
      <p className={props.add?'novisbility':'addwork'} onClick={props.handleclick}>Agregar una Tarea</p>
    {props.add?<input className='addtar' name='addwork' onChange={props.onInputChange} placeholder='Agregar una Tarea'></input>:<></>} 
        </div>
    
    {props.add?<div className='d-flex mt-2 gap-3'>
      <GenericIcons icon="calendar_month" styles="pointer" handleclick={props.showday} ></GenericIcons>
      {props.optionselect?<p>{component}</p>:<></>}
      <GenericIcons  icon="notifications" styles="pointer"  handleclick={props.shownotificacion}></GenericIcons>
      {props.optionselectnotifi?<p>{props.optionselectnotifi}</p>:<></>}
      <GenericIcons icon="repeat" styles="pointer" handleclick={props.showrepit}></GenericIcons>
      {props.optionselectrepeat?<p>{props.optionselectrepeat}</p>:<></>}
      <Button variant="outlined" className={props.addwork?'marginbutton colortwo ':'color marginbutton'} onClick={props.addwork?props.handlesubmit:sweet}>Agregar</Button>
    </div>:<></>}
    
    </div>
  )
}

export default BoxWork