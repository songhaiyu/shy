import request from '../utils/request'

export function login(data: object) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
export function process(data: object) {
  console.log(data)
  return request({
    url: '/user/process/startProcess',
    method: 'post',
    data
  })
}
