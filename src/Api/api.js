import axios from 'axios'

async function api (patente) {
    const respuesta = await axios.post(`https://backend-patentes.herokuapp.com/api/${patente}`)
    .catch(error => {return error})
    return respuesta
}

export default api