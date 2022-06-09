import React from 'react'
import styles from './styles.module.scss'

function RacaSelecionada ({raca}) {
  return (
    <div className={styles.racaSelecionada}>
      <h2 className={styles.racaSelecionada__nome}>
        {raca.name}
      </h2>
      <p className={styles.racaSelecionada__info}>
        <span className={styles.racaSelecionada__info__descricao}>
          Tempo de vida:
        </span>
        {` ${raca.life_span}`}
      </p>
      <img
        alt="Imagem de raca"
        className={styles.racaSelecionada__imagem}
        src={raca.imagem}
      />
    </div>
  )
}

export default RacaSelecionada