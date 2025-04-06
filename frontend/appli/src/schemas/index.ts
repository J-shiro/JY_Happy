// 表单验证组件
import * as z from "zod"; // 用于类型检查

// 登录表单验证
export const LoginSchema = z.object({
    email: z.string().email({
        message: "请输入有效的邮箱地址"
    }),
    password: z.string().min(1, {
        message: "请输入密码"
    })
});

// 注册表单验证
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "请输入有效的邮箱地址"
    }),
    password: z.string().min(8, {
        message: "至少需要 8 位字符"
    }),
    name: z.string().min(1, {
        message: "请输入用户名",
    }),
});