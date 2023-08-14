import React from 'react'
import GenericIcons from './GenericIcons'
import Todos from './Todos'

const Sucesfully = (props) => {
    const map=props.finish.map(x=><  Todos showcompelteawwls={()=>{console.log('ss')}} id={x.idusers} idtodo={x.idTODO} relleno={x.terminado} important={x.importante} repetir={x.repetir} work={x.nametodo} notificacion={x.notificacion} fechavencimiento={x.fechavencimiento} despegablenav={props.despegablenav}></Todos>)
  return (
    
 <>
   
       {props.finish.length>=0 ?
     <div className='d-flex flex-column align-items-center  mt-2 gap-3'>
       
       <div onClick={props.showcomplete} className={props.despegablenav?'d-flex movertwho pointer':'d-flex moverone pointer'}>
        <GenericIcons icon={props.complete?'expand_more ':'chevron_right'}></GenericIcons>
        <p>{`Completado ${props.finish.length+1} `}</p>
      

       </div>
       {
          props.complete?<></>:<hr className={props.despegablenav?'linethree':'linedos'}></hr>
       }
       {
        props.complete ?map:<></>
       }

       
       </div>
       :<></>}
       </>
        
    
  )
}

export default Sucesfully