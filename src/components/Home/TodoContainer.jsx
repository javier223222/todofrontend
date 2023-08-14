import React from 'react'
import Todos from './Todos'

const TodoContainer = (props) => {
    const map=props.todos.map(x=><   Todos showcompelteawwls={props.showcompelteawwls} id={x.idusers} idtodo={x.idTODO} relleno={x.terminado} important={x.importante} repetir={x.repetir} work={x.nametodo} notificacion={x.notificacion} fechavencimiento={x.fechavencimiento} despegablenav={props.despegablenav}></Todos>)
    
  return (
    <div className='d-flex flex-column align-items-center  margende gap-3'>
          {map}
    </div>
  )
}

export default TodoContainer