import React from 'react'
import Sun from './Sun'

const MyDay = (props) => {
  return (
    <div className={props.styles}>
         <Sun handleclick={props.handleclick}></Sun>
       <p>Mi día</p>
    </div>
  )
}

export default MyDay