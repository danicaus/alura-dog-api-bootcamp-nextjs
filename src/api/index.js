import axios from 'axios'

const imagensApiUrl = 'https://dog.ceo/api'
const sobreApiUrl = 'https://api.thedogapi.com/v1'


const buscaImagemPorRaca = raca => axios
  .get(`${imagensApiUrl}/breed/${raca.toLowerCase().replace(' ', '/')}/images/random`)
  .then(resposta => resposta.data.message)
  
const buscaSobreRacas = () => axios
  .get(`${sobreApiUrl}/breeds`)
  .then(resposta => resposta.data)

const buscaTodasRacas = () => axios
  .get(`${imagensApiUrl}/breeds/list/all`)
  .then(resposta => {
    const { message } = resposta.data;
    const completeName = Object.entries(message).map(([chave, valor]) => {
      if (valor.length === 0) return chave;
      for(const nome of valor.values()) return `${chave} ${nome}`
      return
    })
    // return Object.keys(message)
    return completeName
  })

export {
  buscaImagemPorRaca,
  buscaSobreRacas,
  buscaTodasRacas
}
