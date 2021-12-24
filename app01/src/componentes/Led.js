import React from 'react'
import LedVermelho from './img/led_vermelho.jpg'
import LedVerde from './img/led_verde.jfif'

export default function Led(props){

    return(
        <section>
            <h1>Semáforo</h1>
            <img style={{width:'50px'}} src={props.ligado?LedVerde:LedVermelho}/>

            <button onClick={()=>props.TrocaEstado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
        </section>
    )
}