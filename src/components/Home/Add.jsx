import React from 'react'

const Add = (props) => {
    const classes="material-symbols-outlined " + props.styles
  return (
    <span className={classes} onClick={!props.add?props.handleclick:props.none}>
    {props.add?'radio_button_unchecked':'add'}
    </span>
  )
}

export default Add