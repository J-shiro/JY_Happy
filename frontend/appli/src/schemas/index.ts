// 表单验证组件
import * as z from "zod"; // 用于类型检查

export const LoginSchema = z.object({
    email: z.string().email({
        message: "请输入有效的邮箱地址"
    }),
    password: z.string().min(1, {
        message: "请输入密码"
    })
});