import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if( n < 0 ) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState("")
    const [inputStatus, setInputStatus] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(number > 5) {
            document.title = "Eita!!!"
        } else {
            document.title = "React App"
        }
    }, [number])

    useEffect(function() {
        if(inputStatus % 2 === 0) {
           setStatus("Par")
        } else {
           setStatus("Impar")
        }
    }, [inputStatus])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicío #01"/>
            <div >
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
            </div>
            <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>

            <SectionTitle title="Desafio"/>
            <div >
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>
            <input type="number" className="input" value={inputStatus} onChange={e => setInputStatus(e.target.value)}/>

        </div>
    )
}

export default UseEffect
