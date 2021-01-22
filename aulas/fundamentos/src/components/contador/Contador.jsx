import React, { Component } from 'react'
import './Contador.css'

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
        <p>Valor inicial: {this.state.inicial}</p>
        <div style={{ marginBottom: 20}}>
          <label htmlFor="passinho" style={{marginRight: 20}}>Passos</label>
          <input id="passinho" type="number" value={this.state.passos} onChange={e => this.passos(e.target.value)}/>
        </div>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Contador