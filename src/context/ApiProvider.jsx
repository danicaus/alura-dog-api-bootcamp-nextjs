import React, { createContext, useEffect, useState } from 'react';
import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from '../api';

export const ApiContext = createContext({
  statusBuscaRaca: '',
  infoRaca: {},
  listaRacas: [],
  selecionaRaca: () => {}
})

export function ApiProvider({ children }) {
  const [statusBuscaRaca, setStatusBuscaRaca] = useState('inicio');
  const [infoRaca, setInfoRaca] = useState({});
  const [listaRacas, setListaRacas] = useState([]);

  useEffect(() => {
    carregaInformacoesIniciais()
  } ,[])

  function carregaInformacoesIniciais() {
    buscaSobreRacas()
      .then(sobreRacas => {
        carregaListaRacas(sobreRacas)
      })
      .catch(erro => {
        setStatusBuscaRaca('erroCarregamento')
      })
  }

  function carregaListaRacas(sobreRacas){
    buscaTodasRacas()
      .then(racas => {
        const listaRacasMostradas = sobreRacas.filter(sobre => {
          return racas.includes(sobre.name.toLowerCase())
        })
        setListaRacas([...listaRacasMostradas])
      })
  }

  function selecionaRaca(raca) {
    const infoSelecionada = listaRacas.filter(infoRaca => infoRaca.name == raca)

    buscaImagemPorRaca(raca)
      .then(imagem => {
        setInfoRaca({
          ...infoRaca,
          ...infoSelecionada[0],
          imagem,
        })
        setStatusBuscaRaca('sucesso')
      })
      .catch(erro => {
        const eh404 = erro.response.status === 404
        const mensagem = eh404 ? 'racaNaoEncontrada' : 'falhaApi'
        setStatusBuscaRaca(mensagem)
      })
  }

  return (
    <ApiContext.Provider
      value={{
        statusBuscaRaca,
        infoRaca,
        listaRacas,
        selecionaRaca
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}