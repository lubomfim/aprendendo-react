import './App.css'
import React from 'react'

import Comp from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'
import Sortear from './components/basicos/SorteiarNumero'
import Card from './components/layout/Card'

const App = props =>
  <div id="app">
    <h1>Fundamentos React</h1>
   <div className="container">
    <Card titulo="#04 Sorteio número aleatório" color="lightblue">
      <Sortear min={0} max={60}/>
    </Card>
    <Card titulo="#03 React.Fragment"color="lightyellow">
      <Fragmento/>
    </Card>
    <Card titulo="#02 Situação do aluno" color="lightgreen">
      <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9"/>
    </Card>
    <Card titulo="#01 Primeiro componente" color="orange">
      <Comp/>
    </Card>
   </div>
  </div>

export default App