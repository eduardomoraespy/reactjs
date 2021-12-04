import React from 'react'
import Dados from './Dados'


export default function Body(){

    // passando props por constantes
    const nome='Julio'
    const tipo_usuario = 'Master'
    const data_cadastro='20/12/2019'

    return(

        <body>
            <Dados 
                Linguagem='JavaScript' 
                Ambiente = 'Node' 
                Ide='Vs Code' 
                Framework='React.js'

                Nome_user={nome} 
                Tipo_user={tipo_usuario}
                data_cad={data_cadastro}

            />

            <h2>Curso React </h2>
            <ul>
                <li>Instalação de ambiente de desenvolvimento</li>
                <li>Conhecendo Estrutura</li>
                <li>Funções</li>
                <li>Componentes</li>
            </ul>
        </body>
    )
}