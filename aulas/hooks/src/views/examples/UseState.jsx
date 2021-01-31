import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [valorAtual, setValorAtual] = useState(0)
    const [nomeAtual, setNomeAtual] = useState('')
   
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{valorAtual}</span>
               <div>
                <button className="btn" onClick={() => setValorAtual(valorAtual - 1)}>-1</button>
                <button className="btn" onClick={() => setValorAtual(valorAtual + 1)}>+1</button>
               </div>
               <div>
                <button className="btn" onClick={() => setValorAtual(current => current - 1000)}>-1000</button>
                <button className="btn" onClick={() => setValorAtual(current => current + 1000)}>+1000</button>
               </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" value={nomeAtual} onChange={e => setNomeAtual(e.target.value)}/>
            <span className="text">{nomeAtual}</span>
        </div>
    )
}

export default UseState
