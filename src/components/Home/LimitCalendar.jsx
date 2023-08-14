import React from 'react'
import TodoToday from './TodoToday'
import DeleteDate from './DeleteDate'

const LimitCalendar = (props) => {
  const despegbaswho=props.despegablenav?'move':'nomove'
  return (


    <div className={props.showcalendar?'d-flex flex-column dates '+despegbaswho:'novisbility'}>
        <h1 className='text-center'>Vencimiento</h1>
        <hr className='line'></hr>
        <TodoToday select={props.selecttoday} classp={"today"} icon="event" date={new Date()} iconname="Hoy"></TodoToday>
        <TodoToday select={props.selecttomorrow} classp={"tomorrow"} icon="event_upcoming" date={new Date(new Date().setDate(new Date().getDate()+1))} iconname="Mañana"></TodoToday>
        {/* new Date(new Date().setDate(new Date().getDate()+1)) */}
        <TodoToday select={props.selectnextweek}  classp={"nextwee"} icon="calendar_apps_script" date={new Date(new Date().setDate(new Date().getDate()+7))} iconname="Semana próxima"></TodoToday>
        <hr className='lineselectfe'></hr>
        <TodoToday select={props.optionalday} classp={"nextwee"} icon="edit_calendar" iconname="Elegir fecha"></TodoToday>
        {props.optionselect?<hr className='datese'></hr>:<></>}
        {props.optionselect?
        <DeleteDate deletedate={props.deletedate} eliminar="Eliminar fecha" ></DeleteDate>:<></>}
    </div>
  )
}

export default LimitCalendar