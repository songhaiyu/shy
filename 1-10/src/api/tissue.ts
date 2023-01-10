import request from '../utils/request'

export function tissue() {
  return request({
    url: '/company/department',
    method: 'GET'
  })
}
