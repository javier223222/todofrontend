import React from 'react'
import GenericIcons from './GenericIcons'

const DeleteDate = (props) => {
  return (
    <div className='d-flex delete align-items-center justify-content-center ' onClick={props.deletedate}>
       <GenericIcons icon="delete" styles="red"></GenericIcons> 
       <p className='red deletep '>{props.eliminar}</p>                                        
    
    </div>
  )
}

export default DeleteDate
