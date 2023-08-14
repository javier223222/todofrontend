import React from 'react'
import Grade from './Grade'

const Important = (props) => {
  return (
    <div className={props.styles}>
        <Grade handleclick={props.handleclick} styles={props.styleimportant}>

        </Grade>
        <p>Importante</p>
      
    </div>
  )
}

export default Important