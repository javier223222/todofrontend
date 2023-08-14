import React from 'react'
import HomeWork from './HomeWork'

const Work = (props) => {
  return (
    <div className={props.styles}>
   <HomeWork handleclick={props.handleclick} styles={props.styleimportant}>

   </HomeWork>
   <p>Tareas</p>
 
</div>
  )
}

export default Work