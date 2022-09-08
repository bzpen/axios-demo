import axios from "axios"

// create an axios instance
const service = axios.create({
  timeout: 5000 // request timeout
})


// request interceptor
service.interceptors.request.use(
  config => {
    // 设置 headers
    // if(token !== "" && token !== null){
    //   config.headers['goken'] = token
    // }
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
    if (res.code == 200) {
      // 成功处理 
      return res
    } else {
      // 后台异常处理
      // res.message  后台异常报告  后续根据后台返回封装 code 对应报错信息
      return Promise.reject(new Error( res.message || "请求错误"))
    }
  },
  // 请求返回异常处理
  error => {
    // console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
