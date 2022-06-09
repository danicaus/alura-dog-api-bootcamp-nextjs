import React from 'react'

import Raca from '../src/components/Raca'
import ListaRacas from '../src/components/ListaRacas'
import Cabecalho from '../src/components/Cabecalho'

import { ApiProvider } from '../src/context/ApiProvider'

function App() {

  return (
    <ApiProvider>
      <div className="container">
        <Cabecalho />
        <Raca />
        <ListaRacas />
      </div>
    </ApiProvider>
  )
  
}

export default App
