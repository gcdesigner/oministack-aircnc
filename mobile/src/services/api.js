import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.102.0.195:3333'
})

export default api