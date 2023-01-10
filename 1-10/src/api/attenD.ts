import request from '../utils/request'
export function attenD(data: object) {
  return request({
    url: '/attendances?page=1&pagesize=10',
    method: 'GET',
    data
  })
}
