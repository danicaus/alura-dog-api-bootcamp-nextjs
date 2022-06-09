import React from 'react'
import useApi from '../../hooks/useApi'
import styles from './styles.module.scss'

function ListaRacas() {
  const { listaRacas, selecionaRaca } = useApi();

  return (
    <ul className={styles.listaRacas}>
      {
        listaRacas.map(raca => (
          <li
            className={styles.listaRacas__item}
            key={raca.id}
            onClick={() => selecionaRaca(raca.name)}
          >
            {raca.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas