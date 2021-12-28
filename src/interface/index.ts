import { RouteRecordRaw } from 'vue-router'
/**
 * 用户信息
 */
export interface IUser {
  token: string | undefined
}
/**
 * 用户登陆信息
 */
export interface ILogin {
  username: string
  password: string
}

/**
 * 自定义异步路由
 */
export interface IAsyncRoutes {
  father: string //父级
  identifier: string //标识码，也是目录名称
  title: string //名称
  icon: string //图标
  type: string //类别 menu：侧边栏
  url: string //路径
  children?: IAsyncRoutes[]
}

/**
 * 路由权限[vuex]
 */
export interface IPermission {
  accessRoutes: RouteRecordRaw[] //模拟异步路由
  menuCollapse: boolean //折叠菜单
}

/**
 * 主题颜色、字体
 */
export interface ITheme {
  styles: IThemeStyles
}
export interface IThemeStyles {
  sidebarBg: string //侧边栏背景颜色
  headerBg: string //头部背景颜色
  mainBg: string //主体内容背景颜色
  menuBg: string //菜单栏背景颜色
  menuTextColor: string //菜单栏字体颜色
  menuTextActiveColor: string //菜单栏选中字体颜色
  subMenuBg: string //子菜单栏背景颜色
  subMenuHover: string //子菜单栏悬浮颜色
}
