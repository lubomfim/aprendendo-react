import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Carla" />
      <Filho nome="Amore" />

    </Pai>
  </div>,
  document.getElementById('root'))
