import React from 'react'

// argumento props é para receber argumentos para o Componente Dados
export default function Dados(props){

    return(
        <div>
            <h1>Bem vindo {props.Nome_user}</h1>
            <h3> Tipo de Usuário - {props.Tipo_user}</h3>
            <h3>Permissões de Usuário - {props.Permissoes()} </h3>
            <h4>Data de Cadastro {props.data_cad} </h4>
            <h5> Expiração {props.fim_cadastro(2019)} </h5>

            <p>Framework: {props.Framework}</p>
            <p>Ambiente: {props.Ambiente}</p>
            <p>Liguagem: {props.Linguagem}</p>
            <p>Ide: {props.Ide}</p>
        </div>
    )
}