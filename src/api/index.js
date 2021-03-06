/**
 * Created by dx on 18/3/19.
 */
// 手机盘点相关接口
import * as common from './modules/common' // 登录退出
import * as store from './modules/store' // 门店管理
import * as role from './modules/role' // 角色管理
import * as permission from './modules/permission' // 权限管理
import * as adminUser from './modules/adminUser' // 用户管理

export default {
  // 手机盘点及相关接口
  common,
  store,
  role,
  permission,
  adminUser
}
