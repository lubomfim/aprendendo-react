import './index.css' // import relativo, pois só precisamos do arquivo
import ReactDom from 'react-dom' 
import React from 'react'

import Comp from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'

ReactDom.render(
  <React.Fragment>
    <Comp/>
    <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9"/>
    <Fragmento/>
  </React.Fragment>,
   document.getElementById('root')
)