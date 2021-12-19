import React from 'react'
import '../App.css' // importação de arquivo css


export default function Body(){

    //css com contantes
    const estilosLista={
        //color:'#r3e'
        color:'#939',
        fontSize:'0.9rem'
    }

    return(

        <body>
            <h2 style={{fontSize:'1.5rem', color:'blueviolet'}}>Curso React </h2>
            <ul style={estilosLista}>
                <li>Instalação de ambiente de desenvolvimento</li>
                <li>Conhecendo Estrutura</li>
                <li>Funções</li>
                <li>Componentes</li>
            </ul>

            <p className='texto'>Classe css externa</p>
        </body>
        
    )
}