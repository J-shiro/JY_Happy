// 路由配置

/**
 * 该路由组公开可访问，不需要认证
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/dashboard",
];

/**
 * 该路由组需要认证，登录成功将重定向到 /settings 页面
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * 该路由前缀用于 API 认证路由
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * 默认路由，登录后重定向
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";