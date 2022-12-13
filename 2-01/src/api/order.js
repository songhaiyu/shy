import http from "@/untils/httpRequest"
/**获取用户列表信息 */
export const getOrderList = (params) => {
  return http.send("/orders", params).then((res) => res.data)
}
/**获取搜索信息 */
export const getOrderId = (id) => {
  return http.send("/orders", id).then((res) => res.data)
}
