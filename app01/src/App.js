import React from 'react'; // importação para usar react
import Logo from './componentes/img/logo.jpg'; // o primeiro argumento é como será chamado no programa

// função que retorna algo
export default  function App(){  
  
  // Arrow function 
  const ano =()=>{
    return (2021)
  }

  const nome = 'Mário'
  const idade = 20
  return(
    <>
      <div class="row">

        <img src={Logo}/>

        <img src='/img/aeronave.jpg'/>

        <p>Bem vindo {nome}, sua idade é {idade}? </p>

        <p>todos direitos reservados - {ano()}</p>
      </div>
    </>
  )
}

// export default App()  // Exportação do retorno da função App()

