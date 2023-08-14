import React from 'react'
import TodoToday from './TodoToday'
import DeleteDate from './DeleteDate'
const NotificacionSelect = (props) => {
 const stilo=props.optionselect?'posi':'pos'
  return (
    
    <div className={props.showoptionnoticacion?'d-flex flex-column align-items-center notifacion '+stilo:'novisbility'}>
          <h1 className='text-center titless'>Aviso</h1>
          <TodoToday select={ props.todayalarm}  classp={"today"} icon="timer" date={new Date()} iconname="Hoy"></TodoToday>
        <TodoToday select={props.tomorrowalarm} classp={"tomorrow"} icon="timer" date={new Date(new Date().setDate(new Date().getDate()+1))} iconname="Mañana"></TodoToday>
        {/* new Date(new Date().setDate(new Date().getDate()+1)) */}
        <TodoToday select={props.nextweekalarm}  classp={"nextwee"} icon="timer" date={new Date(new Date().setDate(new Date().getDate()+7))} iconname="Semana próxima"></TodoToday>
        {props.optionselect?
        <DeleteDate deletedate={props.deletedate}   eliminar="No repetir nunca" ></DeleteDate>:<></>}
    </div>
  )
}

export default NotificacionSelect