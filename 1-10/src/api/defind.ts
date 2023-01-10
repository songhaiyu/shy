// 封装校验
export interface LoginForm {
  mobile: string
  password: string
}
/*封装权限设置请求数据校验*/
export interface permissiosData {
  type: number
  pid: number
}
/*封装页码校验*/
export interface params {
  page: number
  pageSize: number
}
/*封装状态码校验*/
enum CODE {
  SUCCESS = 200,
  ERROR = 500
}
console.log(CODE.SUCCESS)
console.log(CODE['ERROR'])
/*封装员工模块校验*/
export interface StaffApi {
  companyId: string
  companyName: string
  correctionTime: string
  createTime: string
  departmentId: string
  departmentName: string
  enableState: number
  formOfEmployment: number
  formOfManagement: null
  id: string
  inServiceStatus: number
  level: string
  mobile: string
  password: string
  staffPhoto: string
  timeOfEntry: string
  username: string
  workNumber: string
  workingCity: null
}
