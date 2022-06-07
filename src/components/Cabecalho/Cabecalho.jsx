import React from 'react'
import styles from './styles.module.scss'

import Status from '../Status'

const Cabecalho = props => {
  return (
    <div className={styles.cabecalho}>
      <h1 className={styles.cabecalho__titulo}>Seja bem-vindo ao InfoCão</h1>

      <p className={styles.cabecalho__texto}>Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.</p>

      <Status status={props.status}/>
    </div>
  )
}

export default Cabecalho