import React from 'react'

const Passos = props => {
  return (
    <div style={{ marginBottom: 20}}>
          <label htmlFor="passinho" style={{marginRight: 20}}>Passos</label>
          <input id="passinho" type="number" value={props.value} onChange={e => props.aoClicar(e.target.value)}/>
    </div>
  )
}

export default Passos