import React from 'react'
import alunos from '../../data/alunos'

const ListaAlunos = props => {
  const lis = alunos.map(aluno => {
    const aprovacao = aluno.nota < 5 ? 'Reprovado': 'Aprovado'
    return (
      <li key={aluno.id} style={{marginBottom: "10px"}}>
        {aluno.id}{")"} {aluno.nome} tem a nota: <strong>{aluno.nota}</strong> e está <strong>{aprovacao}</strong>
      </li>
    )
  })
  return (
    <div>
      <ul style={{listStyle: "none"}}>
        {lis}
      </ul>
    </div>
  )
}

export default ListaAlunos