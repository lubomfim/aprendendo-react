import React from 'react'

const Buttons = props => {
  return (
    <React.Fragment>
        <button onClick={props.diminuir}>-</button>
        <button onClick={props.aumentar}>+</button>
    </React.Fragment>
  )
}

export default Buttons