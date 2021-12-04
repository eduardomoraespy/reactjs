import React from 'react'; // importação para usar react
import Header from './componentes/Header' // importando componente header
import Body from './componentes/body'
//import Dados from './componentes/Dados' Dados foi inserido dentro de src/componentes/body.js

// função que retorna algo
export default  function App(){  

  return(

    <>
      <Header/>
      <Body/>
    </>

  );
}

// export default App()  // Exportação do retorno da função App()

