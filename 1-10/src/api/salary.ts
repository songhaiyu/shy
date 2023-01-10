import request from '../utils/request'

export function salary(data: object) {
  return request({
    url: '/salarys/list',
    method: 'post',
    data
  })
}
