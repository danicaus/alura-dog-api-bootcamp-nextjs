import React from 'react'
import styles from './styles.module.scss'

const Status = props => (
  <p className={styles.status}>{props.status}</p>
)

export default Status