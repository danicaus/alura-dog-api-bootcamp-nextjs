import React from 'react'
import styles from './styles.module.scss'

function Status({status}) {
  const statusMessages = {
    inicio: 'Você ainda não selecionou nenhum cachorro :(',
    erroCarregamento: 'Oops, algo deu errado no carregamento da página. Pode tentar novamente?',
    racaNaoEncontrada: 'Não encontramos essa raça :(',
    falhaApi: 'Oops, algo deu errado. Pode tentar novamente?',
    sucesso: 'A imagem sempre será diferente, pode clicar quantas vezes quiser!'
  }

  return <p className={styles.status}>{statusMessages[status]}</p>
}

export default Status