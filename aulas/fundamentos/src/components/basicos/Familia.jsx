import React, {cloneElement} from 'react'

const Familia = props => {
  return (
    <div>
    {
      React.Children.map(props.children, (child, i) => cloneElement(child, {...props, key: i}))
    }
    </div>
  )
}

export default Familia