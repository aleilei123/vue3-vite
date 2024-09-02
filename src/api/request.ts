import axios from 'axios'
const { VITE_APP_BASE_URL } = import.meta.env 

const request = axios.create({
  baseURL: VITE_APP_BASE_URL, // api的base_url
  timeout: 10000 // 请求超时时间
})

export default request
