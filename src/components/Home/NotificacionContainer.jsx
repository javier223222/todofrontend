import React from 'react'
import Notificacion from './Notificacion'


const NotificacionContainer = (props) => {

    const notificacion=props.visibility?props.visibility.map(x=><Notificacion id={x.idusers} idtodo={x.idTODO} visibility={true} aviso={x.nametodo}></Notificacion>):<></>
  return (
    <div className={props.visibility?'boxnotificacioncontainer gap-3 d-flex flex-column ':'novisible'}>
     {notificacion}
    </div>
  )
}

export default NotificacionContainer