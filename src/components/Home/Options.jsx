import React from 'react'
import Hamburguer from './Hamburguer'
import Hora from './Hora'

import GenericIcons from './GenericIcons'

const Options = (props) => {
  return (
    <div className='container-fluid elements d-flex'>
     
     <Hamburguer shownMenu={props.shownMenu}></Hamburguer>
     {props.show?<GenericIcons icon={props.iconname} styles="move2"></GenericIcons>:<></>}
     <Hora color={props.color} tittle={props.tittle} date={props.date} show={props.show}></Hora>
    </div>
  )
}

export default Options