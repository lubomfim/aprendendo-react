import React, {Component} from 'react'
import './Mega.css'

class Mega extends Component {

  state = {
    quantidade: 0,
    numeros: []
  }

  gerar() {
    let set = new Set()

    let i = 0

    while(i < this.state.quantidade) {
      let aleatorio = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
      set.add(aleatorio)

      i++
    }

    this.setState({numeros: [...set].sort((a, b) => a - b)})
  }

  setar(valor) {
    this.setState({quantidade: valor})
  }

  render(){
    let convertendo = this.state.numeros.join(', ')
   return (
    <div className="mega">
      <p>{convertendo}</p>
      <input type="number"onChange={e => this.setar(e.target.value)}/>
      <button onClick={_ => this.gerar(this.state)}>Gerar números</button>
    </div>
   
    )
  }
}

export default Mega