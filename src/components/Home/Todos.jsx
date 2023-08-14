import React, { useEffect } from 'react'
import GenericIcons from './GenericIcons'
import TodoToday from './TodoToday'
import { options } from '../../exports'
import axios from 'axios'

const Todos=(props) =>{
 
    const todorealizate=()=>{
      props.showcompelteawwls()
      axios.post('http://localhost:3001/finishedtodo',{
        id:props.id,
        idTODO:props.idtodo
      }).then((res)=>{
        console.log(res.data)
      })
    }
    const importanta= async()=>{
      
          await axios.post('http://localhost:3001/important',{
                id:props.id,
                idTODO:props.idtodo
              }).then((res)=>{
                console.log(res.data)
              })
      
    }
    const coloro=async ()=>{
        return await props.important?"  star_rate_half":"star "
    }
    const desimportant = async ()=>{
    await axios.post('http://localhost:3001/desimportant',{
            id:props.id,
            idTODO:props.idtodo
          }).then((res)=>{
            console.log(res.data)
          })
    }
    const desrealization=()=>{
      axios.post('http://localhost:3001/nofinish',{
        id:props.id,
        idTODO:props.idtodo
      }).then((res)=>{
        console.log(res.data)
      })
    }
    const comprobatedate=(fechavencimiento)=>{
        return new Date().getDay() == new Date(fechavencimiento).getDay() && new Date().getFullYear()==new Date(fechavencimiento).getFullYear() && new Date().getMonth()==new Date(fechavencimiento).getMonth()?'Hoy':'Mañana'
    }
  return (
    <div className={props.despegablenav?'boxmove d-flex gap-2':'box d-flex  gap-2 align-items-center'} >
      <div className='d-flex align-items-center justify-content-start'>
      <GenericIcons handleclick={props.relleno=='si'?desrealization:todorealizate}  icon={props.relleno=='si'?"task_alt ":" radio_button_unchecked"} styles="blue pointer" >
        </GenericIcons> 
      </div>
      <div className='d-flex flex-column gap-1 '>
        <p className='nametodod'>{props.work}</p>
        { props.relleno=='si'?<hr  className={props.despegablenav?'linecubetodotwo':'linecubetodo'}></hr>:<></>}
        <div className='d-flex gap-1'>
            {props.ven?<></>:<p>Tarea</p>}
            <TodoToday icon='calendar_month' styles="blue"  
            iconname={new Date().getDay() == new Date(props.fechavencimiento).getDay() && new Date().getFullYear()==new Date(props.fechavencimiento).getFullYear() && new Date().getMonth()==new Date(props.fechavencimiento).getMonth()
            ?comprobatedate(props.fechavencimiento):
            `${new Date(props.fechavencimiento).toLocaleDateString("es-Es",options)}`}  ></TodoToday>
            {props.notificacion ? <TodoToday icon=' notifications' iconname={new Date().getDay() == new Date(props.notificacion).getDay() && new Date().getFullYear()==new Date(props.notificacion).getFullYear() && new Date().getMonth()==new Date(props.notificacion).getMonth()
              ?comprobatedate(props.notificacion):`${new Date(props.notificacion).toLocaleDateString("es-Es",options)}`}  ></TodoToday>:<></>}
            {props.repetir ? <TodoToday icon='repeat' styles="blue " ></TodoToday>:<></>}
        </div>
       
      </div>
      <GenericIcons handleclick={props.important?desimportant:importanta} icon={ props.important?"  star_rate_half":"star "} styles={props.despegablenav?'blue marstarttwo pointer':"blue marstart pointer"}  >

      </GenericIcons>
      
    </div>
  )
}

export default Todos