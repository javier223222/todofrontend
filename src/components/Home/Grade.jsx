import React from 'react'

const Grade = (props) => {
    const classes="material-symbols-outlined " + props.styles
  return (
    <span className={classes} onClick={props.handleclick}>
    grade
    </span>
  )
}

export default Grade