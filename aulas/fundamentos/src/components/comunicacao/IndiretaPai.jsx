import React from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = props => {
  function fornecerInformacoes (nomeParam, idadeParam, nerdParam) {
      console.log(nomeParam, idadeParam, nerdParam)
  }
  
  return(
  <div>
    <div>Pai</div>
   <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
  </div>
  )
}

export default IndiretaPai