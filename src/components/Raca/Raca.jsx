import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import useApi from '../../hooks/useApi'

function Raca () {
  const { infoRaca } = useApi();
  const racaFoiSelecionada = Boolean(infoRaca.name)

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada raca={infoRaca} />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca