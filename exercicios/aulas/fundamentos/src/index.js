import './index.css' // import relativo, pois só precisamos do arquivo
import ReactDom from 'react-dom' 
import React from 'react'

import Comp from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
  <div className="app">
    <Comp/>
    <ComParametro titulo="Segundo Componente" subtitle="Muito legal!"/>
  </div>,
   document.getElementById('root')
)