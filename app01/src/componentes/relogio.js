import React from 'react'
import '../App.css'

export default function Relogio(){

    return(
        <section className='container'>
            <div className='centralizar'>
                <p>
                    {new Date().toLocaleTimeString()}
                </p>
            </div>
        </section>
    )
}