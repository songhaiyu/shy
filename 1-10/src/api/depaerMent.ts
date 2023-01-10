import request from '../utils/request'

export function depaerMentList(data: object) {
  return request({
    url: '/social_securitys/list?yearMonth=202001',
    method: 'POST',
    data
  })
}
export function depaerMent() {
  return request({
    url: '/company/department',
    method: 'GET'
  })
}
export function city() {
  return request({
    url: '/sys/city',
    method: 'GET'
  })
}
export function yearMonth() {
  return request({
    url: '/social_securitys/historys/202001?yearMonth=202001&opType=1',
    method: 'GET'
  })
}

export function securitys() {
  return request({
    url: '/social_securitys/historys/2020/list?year=2020',
    method: 'GET'
  })
}
