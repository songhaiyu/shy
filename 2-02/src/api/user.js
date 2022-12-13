import http from "@/untils/httpRequest"
/**获取用户列表信息 */
export const getUserList = (params) => {
  return http.send("/users", params).then((res) => res.data)
}
/**搜索接口 */
export const getSearchUser = (params) => {
  return http.send("/users", params).then((res) => res.data)
}
/**添加用户 */
export const setUser = (data) => {
  return http.send("/users", data, "post").then((res) => res.data)
}
/**编辑用户 */
export const updateUser = (data) => {
  return http.send("/users", data, "put").then((res) => res.data)
}
/**删除用户 */
export const delUser = (id) => {
  return http.send("/users", id, "delete").then((res) => res.data)
}
/**修改用户角色 */
export const updateUserAss = (obj) => {
  return http.send("/users", obj, "put").then((res) => res.data)
}
/**获取角色列表 */
export const getRoles = () => {
  return http.send("/roles", "get").then((res) => res.data)
}
/**
 *这里用不到同步,同步会阻塞代码，异步就可以，所以不用async await
 */
// async await
// async function getUserList(params) {
//   let { data } = await http.send("/users", params).then((res) => res)
//   return data
// }
// export { getUserList }
