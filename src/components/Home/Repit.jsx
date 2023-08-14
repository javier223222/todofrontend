import React from 'react'
import TodoToday from './TodoToday'
import DeleteDate from './DeleteDate'

const Repit = (props) => {
 
        const stilo=props.optionselect?'posibox':'posibox'
         return (
           
           <div className={props.showrepition?'d-flex flex-column align-items-center notifacion '+stilo:'novisbility'}>
                 <h1 className='text-center titless'>Repetir</h1>
                 <TodoToday select={ props.selectdiar}   icon="event"  iconname="Diaramente"></TodoToday>
               <TodoToday select={props.selectweek} classp={"sman"} icon="calendar_view_month"  iconname="Semanal"></TodoToday>
               {/* new Date(new Date().setDate(new Date().getDate()+1)) */}
               <TodoToday select={props.selectmoth} classp={"smanmoth"}  icon="calendar_month"  iconname="Mensualmente"></TodoToday>
               {props.optionselect?
               <DeleteDate deletedate={props.deleterepetion}   eliminar="Eliminar Aviso" ></DeleteDate>:<></>}
           </div>
  )
}

export default Repit