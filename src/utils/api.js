import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jenkins.ngs/api',
})

export default api
