import React from 'react'
import { options } from '../../exports'

const Hora = (props) => {
  return (
    <div className='d-flex flex-column '>
     <div className={props.show?'move':'dgdg'}>
    <h1 className={'tittlee '+props.color} >{props.tittle}</h1>
     </div>
     <div className={props.show?'move':'date'}>
      <p >{props.date?props.date.toLocaleDateString("es-Es",options):''}</p>
     </div>
    </div>
  )
}

export default Hora