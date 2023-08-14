import React from 'react'

const HomeWork = (props) => {
    const classes="material-symbols-outlined " + props.styles
  return (
    <span className={classes} onClick={props.handleclick}>
home
</span>
  )
}

export default HomeWork