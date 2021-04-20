import axios from 'axios'
import {URL} from '../../url'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: URL,
    timeout: 5000
  })

  // axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }),err => {
    console.log(err)
  }
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }),err => {
    console.log(err)
  }

  // 发送真正的网络请求（返回promise）
  return instance(config)
}


