import axios from "axios"
import { getToken, removeToken } from "./auth"
const http = axios.create({
  baseUrl: "/",
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-type": "application/json; charset=utf-8"
  }
})
http.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = getToken()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    if (response.statusCode === 200) {
      removeToken()
    }
    return response
  },
  (error) => {
    return error
  }
)
export default http
