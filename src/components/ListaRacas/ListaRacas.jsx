import React from 'react'
import styles from './styles.module.scss'

const ListaRacas = props => {
  return (
    <ul className={styles.listaRacas}>
      {
        props.racas.map(raca => (
          <li
            className={styles.listaRacas__item}
            key={raca.id}
            onClick={() => props.selecionaRaca(raca.name)}
          >
            {raca.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas