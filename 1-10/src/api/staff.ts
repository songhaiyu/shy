/*封装员工接口*/
import request from '../utils/request'

export function Staff() {
  return request({
    url: '/sys/user?page=1&size=10',
    method: 'get'
  })
}
