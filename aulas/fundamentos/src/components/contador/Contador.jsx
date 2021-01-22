import React, { Component } from 'react'

class Contador extends Component {
   state = {
    inicial: this.props.numeroInicial
  }

  inc = () => {
    this.setState({inicial: this.state.inicial + 1})
  }

  dec = () => {
    this.setState({inicial: this.state.inicial - 1})
  }

  
  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Valor inicial: {this.state.inicial}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Contador