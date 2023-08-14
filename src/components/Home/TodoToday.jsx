import React from 'react'
import GenericIcons from './GenericIcons'
import { options } from '../../exports'

const TodoToday = (props) => {
    const day = [
        'dom.',
        'lun.',
        'mar.',
        'miér.',
        'jue.',
        'vie.',
        'sáb.',
      ];
  return (
    <div
    className='d-flex containerday gap-2' onClick={props.select}>
        <GenericIcons icon={props.icon} styles={props.styles}></GenericIcons>
        <p>{props.iconname}</p>
        <p className={props.classp}>{props.date?day[props.date.getDay()]:''}</p>
       
    </div>
  )
}

export default TodoToday