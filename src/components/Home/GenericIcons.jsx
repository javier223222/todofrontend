import React from 'react'

const GenericIcons = (props) => {
    const classes="material-symbols-outlined " + props.styles
  return (
    <span className={classes} onClick={props.handleclick}>
    {props.icon}
    </span>
  )
}

export default GenericIcons