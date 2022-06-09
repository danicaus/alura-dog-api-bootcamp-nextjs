# Desafio Bootcamp JAMStack Alura

Esse desafio consiste em migrar um app criado em "create react-app" para NextJS.

Inicialmente foi necessário atualizar algumas bibliotecas, pois esse código é um fork de uma aplicação criada há mais de um ano.

Inicialmente o package estava assim:

```json
"dependencies": {
  "axios": "^0.18.0",
  "node-sass": "^4.12.0",
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "react-scripts": "3.0.0"
},
```

- Ao rodar `npm install`, o CLI acusou um erro ao tentar instalar o node-sass, e vi que essa lib não está sendo mais sustentada. Então rodei `npm uninstall node-sass` e o node instalou o node_modules.

- instalei o sass: `npm install sass`

- atualizei os pacotes: `npm install react@latest react-dom@latest`

- Atualizei o react-scripts: `npm install react-scripts@latest`

- Atualizei o axios: `npm install axios@latest`

Depois disso, o `npm audit` ainda acusa 6 vulnerabilidades severas, mas acredito que isso vai melhorar ao fim do projeto.

Agora o package está assim:

```json
"dependencies": {
  "axios": "^0.27.2",
  "react": "^18.1.0",
  "react-dom": "^18.1.0",
  "react-scripts": "^5.0.1",
  "sass": "^1.52.2"
},
```

Havia um "/" a mais na parte de API que foi removida para que as requisições passassem a funcionar.

Pronto! O app voltou a rodar! \o/

## Exercício

Passei a página única para uma versão funcional do React, tirando da versão antiga. Passei a usar os hooks `useState` e `useEffect` em vez de suas versões antigas.

Criei um `ApiProvider` para comunicação com as APIs. Ele fornece a lista de raças, a raça selecionada, o estado da seleção e a função para seleção de uma nova raça.

Criei um hook para puxar esses valores fornecidos pelo contexto. Assim não é necessário passar props entre os componentes abaixo dele.
