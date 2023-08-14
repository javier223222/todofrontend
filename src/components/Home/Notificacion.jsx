import React from 'react'
import GenericIcons from './GenericIcons'
import axios from 'axios'

const Notificacion = (props) => {
  const todorealizate=()=>{
        
    axios.post('http://localhost:3001/finishedtodo',{
      id:props.id,
      idTODO:props.idtodo
    }).then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <div className={props.visibility?'boxnotificacion  d-flex ':'novisible'}>
       <GenericIcons icon="radio_button_unchecked " styles='blue pointer' handleclick={todorealizate}></GenericIcons>
       <p>{`Aviso:${props.aviso}`}</p>
    </div>
  )
}

export default Notificacion