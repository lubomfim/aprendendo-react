import React, { useState } from 'react'
import './Input.css'

const Input = props => {
  const [valor, setValor] =  useState('inicial')

  function mudarValor(e) {
    setValor(e.target.value)
  }
  return (
    <div className="input">
      <input value={valor} onChange={mudarValor}/>
      <input value={valor} readOnly/>
      <input value={undefined}/>
    </div>
  )
}

export default Input