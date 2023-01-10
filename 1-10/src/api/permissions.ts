import request from '../utils/request'

export function permissions() {
  return request({
    url: '/sys/permission?type=1&pid=0',
    method: 'GET'
  })
}
