import React from 'react'
import Logo from './img/logo.jpg'

export default function Header(){

    // Css inline
    return(
        <header>
            <img style={{width:'150px', height:'80px'}} src={Logo}/>
            
            <h1>Menu</h1>
        </header>
    )
}