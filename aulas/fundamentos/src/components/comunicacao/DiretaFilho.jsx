import React from 'react'

const DiretaFilho = props => {
  return(
    <div>
      <span>{props.text} </span>
      <span>tem {props.numero} anos, </span>
      <span>e é {props.bool ? 'Verdadeiro' : 'Falso'}</span>
    </div>
  )
}

export default DiretaFilho