import React from 'react'

import Comp from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'

const App = props =>
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento/>
    <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9"/>
    <Comp/>
  </div>

export default App