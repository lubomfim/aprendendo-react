import './TabelaProdutos.css'
import produtos from '../../data/produtos'
import React from 'react'

const TabelaProduto = props => {
  const tr = produtos.map(elemento => {
    return (
      <tr key={elemento.id}>
        <td>{elemento.id}</td>
        <td>{elemento.nome}</td>
        <td>{`${elemento.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {tr}
      </tbody>
    </table>
  )
} 

export default TabelaProduto;