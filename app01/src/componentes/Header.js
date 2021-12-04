import React from 'react'
import Logo from './img/logo.jpg'

export default function Header(){


    return(
        <header>
            <img src={Logo}/>
            
            <h1>Menu</h1>
        </header>
    )
}