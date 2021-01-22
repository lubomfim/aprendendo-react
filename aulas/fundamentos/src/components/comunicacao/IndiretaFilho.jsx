import React from 'react'

const IndiretaFilho = props => {
  return(
    <div>
      <div>Filho</div>
      <button onClick={_ => props.quandoClicar('João', 53, true)}>Fornecer Informações</button>
    </div>
  )
}

export default IndiretaFilho