import React from 'react'

const Sun = (props) => {
  const classes='material-symbols-outlined ' +props.styles
  return (
    <span class={classes} onClick={props.handleclick}>
sunny
</span>
  )
}

export default Sun