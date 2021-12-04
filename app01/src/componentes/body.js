import React from 'react'
import Dados from './Dados'


export default function Body(){

    // passando props por constantes
    const nome='Julio'
    const tipo_usuario = 'Super Usuário'
    const data_cadastro='20/12/2019'
    const mes_ano = '20/12/'

    // Passando props por arrow function
    const permissoes=()=>{
        return 'Editar, Salvar e excluir'
    }

    // Arroe function para acesso em plataforma
    const acesso_plat=(dta_cad)=>{
        var res = dta_cad + 2
        return mes_ano + res
    }

    return(

        <body>
            <Dados 
                Linguagem='JavaScript' 
                Ambiente = 'Node' 
                Ide='Vs Code' 
                Framework='React.js'

                Nome_user={nome} 
                Tipo_user={tipo_usuario}
                Permissoes = {permissoes}
                data_cad={data_cadastro}
                fim_cadastro = {acesso_plat}

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