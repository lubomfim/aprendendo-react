import './App.css'
import React from 'react'

import Comp from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'
import Sortear from './components/basicos/SorteiarNumero'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMebro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProdutos'

const App = props =>
  <div id="app">
    <h1>Fundamentos React</h1>
   <div className="container">
    <Card titulo="#07 Tabela produtos" color="gold">
      <TabelaProduto />
    </Card>
    <Card titulo="#06 Tabela alunos" color="white">
      <ListaAlunos />
    </Card>
    <Card titulo="#05 Componentes com filho" color="pink">
      <Familia sobrenome="Soares">
        <FamiliaMembro nome="Pedro"/>
        <FamiliaMembro nome="Maria"/>
        <FamiliaMembro nome="Lucia"/>
      </Familia>
    </Card>
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