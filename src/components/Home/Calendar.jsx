import React from 'react'

const Calendar = (props) => {
    const classes="material-symbols-outlined " + props.styles
  return (
    <span className={classes} onClick={props.handleclick}>
    calendar_month
    </span>
  )
}

export default Calendar