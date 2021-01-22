import React from 'react'
import Se from './if'


const UsuarioInfo = props => {
  const usuario = props.usuario || {nome: 'amigo'}
  return (
    <div>
      <Se test={usuario && usuario.nome}>
        Seja bem vindo, { usuario.nome }!
      </Se>
       <Se test={!usuario || !usuario.nome}>
        Seja bem vindo, queride!
      </Se>
    </div>
  )
}

export default UsuarioInfo