import React, { Component } from 'react'
import './Contador.css'


import Display from './Display'
import Passos from './Passos'
import Buttons from './Buttons'

class Contador extends Component {
   state = {
    inicial: 0,
    passos: 1
  }

  inc = () => {
    this.setState({inicial: this.state.inicial + this.state.passos})
  }

  dec = () => {
    this.setState({inicial: this.state.inicial - this.state.passos})
  }

  passos = (passo) => {
    this.setState({passos: parseInt(passo)})
  }

  
  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Display valorInicial={this.state.inicial}/>
        <Passos value={this.state.passos} aoClicar={this.passos} />
        <Buttons aumentar={this.inc} diminuir={this.dec}/>
      </div>
    )
  }
}

export default Contador