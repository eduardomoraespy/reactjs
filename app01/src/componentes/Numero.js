import React from 'react'

export default function Numero(props){
    return(
        <>
            <section>
                <h1>Valor do State num: {props.num}</h1>

                <button onClick={()=>props.ConnfigState(props.num+30)}>Somar</button>
            </section>
        </>
    )
}