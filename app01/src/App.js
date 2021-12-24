import React, {useState} from 'react'; // importação para usar react
import Numero from './componentes/Numero';


// função que retorna algo
export default  function App(){  
  const [num, ConnfigState]=useState(10+10)

  return(
    <>
      <Numero num={num} ConnfigState={ConnfigState}/>
    </>
  );
}

// export default App()  // Exportação do retorno da função App()

