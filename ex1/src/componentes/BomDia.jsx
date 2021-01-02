import React from 'react'

export default props => [
  <h1 key="h1">Bom dia, {props.nome}. Você tem {props.idade} anos!</h1>,
  <h2 key="h2">Até breve</h2>
]


/*
import React, {Fragment} from 'react'

export default props => <Fragment>
  <h1>Bom dia, {props.nome}. Você tem {props.idade} anos!</h1>
  <h2>Até breve</h2>
</Fragment>
 */