import React from 'react'
import Calendar from './Calendar'

const Planed = (props) => {
  return (
    <div className={props.styles}>
   <Calendar handleclick={props.handleclick} styles={props.styleimportant}>

   </Calendar>
   <p>Planeado</p>
 
</div>
  )
}

export default Planed