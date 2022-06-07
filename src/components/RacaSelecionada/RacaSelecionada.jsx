import React from 'react'
import styles from './styles.module.scss'

const RacaSelecionada = props => (
  <div className={styles.racaSelecionada}>
    <h2 className={styles.racaSelecionada__nome}>
      {props.raca.name}
    </h2>
    <p className={styles.racaSelecionada__info}>
      <span className={styles.racaSelecionada__info__descricao}>
        Tempo de vida:
      </span>
      {props.raca.life_span}
    </p>
    <img
      alt="Imagem de raca"
      className={styles.racaSelecionada__imagem}
      src={props.raca.imagem}
    />
  </div>
)

export default RacaSelecionada