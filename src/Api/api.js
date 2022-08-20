import axios from 'axios'

async function api (patente) {
    const respuesta = await axios.post(`http://localhost:3010/api/${patente}`)
    .catch(error => {return error})
    return respuesta
}

export default api