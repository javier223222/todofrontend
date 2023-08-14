import React from 'react'
import Sun from './Sun'
import MyDay from './MyDay'
import Important from './Important'
import Planed from './Planed'
import Work from './Work'

const Despegable = (props) => {
  return (
    <div className={props.show?'visibible general d-flex flex-column ':'novisible d-flex flex-column '}>
    <div className='m-5 '>
    <MyDay handleclick={props.handleclickmyday} styles="d-flex gap-3"></MyDay>
    <Important handleclick={props.handleclickmyimportant}  styles="d-flex gap-3" ></Important>
    <Planed handleclick={props.handleclickmyplaned} styles="d-flex gap-3"></Planed>
    <Work  handleclick={props.handleclickwork} styles="d-flex gap-3" ></Work>
    </div>
   

    </div>
  )
}

export default Despegable