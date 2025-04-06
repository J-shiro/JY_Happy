// 用户注册表单组件, 从登录拷贝
"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { register } from "@/actions/register"
import { useTransition, useState } from "react";

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

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    // react-hook-form 表单管理 hook
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { // 默认值为空
            email: "",
            password: "",
            name: "",
        },
    })
    
    // z.infer 自动解析 RegisterSchema 类型
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    }

    return (
        <CardWrapper
            headerLabel="创 建 账 号"
            headerTitle="欢 迎 来 到 JY-Happy"
            backButtonLabel="已经拥有账号?直接登录"
            backButtonHref="/auth/login"
            showSocial>
            {/* 等价于 <Form form={form}> */}
            <Form {...form}>
                {/* 执行 zod 校验, 失败显示错误信息, 成功执行 onSubmit */}
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6">
                        <div className="space-y-4">
                        <FormField
                                control={form.control} // 绑定表单控制器
                                name="name"
                                // 渲染
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>用 户 名</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="faker"
                                            />
                                        </FormControl>
                                        {/* 自动显示 react-hook-form 校验错误 */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                                                disabled={isPending}
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
                                注 册
                        </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}