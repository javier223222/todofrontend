import React from 'react'

const Hamburguer = (props) => {
  return (
    <span onClick={props.shownMenu} className="material-symbols-outlined hamburguer">
    menu
</span>
  )
}

export default Hamburguer