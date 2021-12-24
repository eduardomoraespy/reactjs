import React, {useState} from 'react'; // importação para usar react
import Led from './componentes/Led'


// função que retorna algo
export default  function App(){  
  
  const [ligado, TrocaEstado] = useState(false)

  return(
    <>
      <Led ligado={ligado} TrocaEstado={TrocaEstado}/>
    </>
  );
}

// export default App()  // Exportação do retorno da função App()

