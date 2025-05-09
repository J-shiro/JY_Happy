// 用户登录表单组件
"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { login } from "@/actions/login"
import { useTransition, useState } from "react"; // 管理组件的状态和异步任务的过渡效果

import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField
} from "@/components/ui/form";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
    // 定义状态变量及状态更新函数: 可为 string 或 undefined, 初始化为空
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    // 低优先级更新防止 UI 卡顿
    const [isPending, startTransition] = useTransition();

    // react-hook-form 表单管理 hook
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { // 默认值为空
            email: "",
            password: "",
        },
    })
    
    // z.infer 自动解析 LoginSchema 类型
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        // 低优先级更新
        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data?.error); // 可选链 null 或 undefined 返回 undefined
                setSuccess(data?.success);
            });
        });
    }

    return (
        <CardWrapper
            headerLabel="欢 迎 回 来"
            headerTitle="请 登 录 您 的 账 户"
            backButtonLabel="没有账号?立即注册"
            backButtonHref="/auth/register"
            showSocial>
            {/* 等价于 <Form form={form}> */}
            <Form {...form}>
                {/* 执行 zod 校验, 失败显示错误信息, 成功执行 onSubmit */}
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control} // 绑定表单控制器
                                name="email"
                                // 渲染
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>邮 箱</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field} // ...field 展开对象属性，绑定到 Input
                                                disabled={isPending} // true 时，输入框 Input 禁用
                                                placeholder="hello.world@example.com"
                                                type="email"
                                            />
                                        </FormControl>
                                        {/* 自动显示 react-hook-form 校验错误 */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>密 码</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="********"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button className="w-full" type="submit" disabled={isPending}>
                                登 录
                        </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}