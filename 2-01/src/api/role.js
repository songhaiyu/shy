import http from "@/untils/httpRequest"
/**获取用户列表信息 */
export const getRolesList = () => {
  return http.send("/roles").then((res) => res.data)
}
/**编辑用户信息 */
export const editRoles = (params) => {
  return http.send("/roles", params, "put").then((res) => res.data)
}
/**添加用户信息 */
export const addRoles = (params) => {
  return http.send("/roles", params, "post").then((res) => res.data)
}
/**删除用户信息 */
export const delRoles = (params) => {
  return http.send("/roles", params, "delete").then((res) => res.data)
}
/**树状图 */
export const GetTree = () => {
  return http.send("/tree").then((res) => res.data)
}
/**角色授权 */
export const SetRolse = (data) => {
  return http.send("/roles", data, "post").then((res) => {
    return res
  })
}
/**删除角色 */
export const DeleteRolse = (data) => {
  return http.send("/roles", data, "delete").then((res) => {
    return res
  })
}
