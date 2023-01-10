import axios from 'axios'
import { getToken } from './auth'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=uft-8'
    // Authorization: 'Bearer 66a097d5-7327-4074-ab66-3b4684f6f2eb',
    // Cookie:
    //   'JSESSIONID=66a097d5-7327-4074-ab66-3b4684f6f2eb; Admin-Token-HRM=66a097d5-7327-4074-ab66-3b4684f6f2eb'
  }
  // withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers = {
        Authorization: `Bearer 795195d2-3c2d-4650-b185-6deef34ee02b`,
        Cookie: `JSESSIONID=795195d2-3c2d-4650-b185-6deef34ee02b`
        // 'Access-Control-Allow-Methods': 'get'
      }
    }
    // config.headers.Authorization = getToken()
    // config.headers.Cookie ='JSESSIONID=JSESSIONID=9f7866ea-44ca-4141-bf8e-17c0cc3f8d4b; Admin-Token-HRM=9f7866ea-44ca-4141-bf8e-17c0cc3f8d4b'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    console.log(error)

    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default instance
