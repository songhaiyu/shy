/*封装公司设置接口*/
import request from '@/utils/request'

export function getCompany() {
  return request({
    url: '/sys/role?page=1&pagesize=10',
    method: 'get'
  })
}

export function getCompanyInformation() {
  return request({
    url: '/company/1?id=1',
    method: 'get'
  })
}
