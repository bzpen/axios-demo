import axios, { AxiosInstance } from "axios"
import { HEADERS } from './config' 


const init = ( config?: Object| undefined, header?: String | undefined, token?: String | undefined ):AxiosInstance=>{

  const service = axios.create(config)

  // request interceptor
  service.interceptors.request.use(
    config => {
      // 设置 headers
      if(header !== undefined && header !== ''){
        config.headers!["Content-Type"] = HEADERS[header as string]
      }
      // 设置token
      if(token !== undefined && token !== ''){
        config.headers!.token = token as string
      }
      return config;
    },
    error => {
      // do something with request error
      // console.log(error) // for debug
      // 返回错误请求
      return Promise.reject(error)
    }
  )

  // 返回格式  Promise
  service.interceptors.response.use(
    
    response => {
      const res = response.data
      return res
    },
    // 请求返回异常处理
    error => {
      // console.log('err' + error)
      return Promise.reject(error)
    }
  )

  return service
}
export default init
