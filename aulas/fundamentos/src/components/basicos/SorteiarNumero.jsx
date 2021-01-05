import React from 'react'

const Sortear = props => {
  const {min, max} = props
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1))  + min;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong>{min}</p>
      <p><strong>Valor Máximo: </strong>{max}</p>
      <p><strong>Valor Sorteado: </strong>{numeroAleatorio}</p>
    </div>
  )
}

export default Sortear