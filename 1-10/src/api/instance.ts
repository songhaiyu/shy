import request from '../utils/request'

export function instance(data: object) {
  return request({
    url: '/user/process/instance/1/10',
    method: 'PUT',
    data
  })
}
