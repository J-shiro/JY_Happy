// 用户登录表单组件
"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";

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
        console.log(values);
    }

    return (
        <CardWrapper
            headerLabel="欢 迎 回 来"
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
                                                {...field}
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
                                                placeholder="********"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message="" />
                        <FormSuccess message="" />
                        <Button className="w-full" type="submit">
                                登 录
                        </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}