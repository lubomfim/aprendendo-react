import React from 'react'

import DiretaFilho from './DiretaFilho'

const DiretaPai = props => {
  return(
  <div>
      <DiretaFilho text="Gabriel"numero={10} bool={false} />
      <DiretaFilho text="Júnior"numero={17} bool={false} />
      <DiretaFilho text="Marcella"numero={13} bool={true} />
  </div>
  )
}

export default DiretaPai