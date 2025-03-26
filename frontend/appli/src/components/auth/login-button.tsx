// 登录按钮组件
"use client";

import { useRouter } from "next/navigation"; // 客户端路由 hook

interface LoginButtonProps {
    children: React.ReactNode; // 按钮内容
    mode?: "modal" | "redirect", // 登录模式
    asChild?: boolean, 
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter(); // 获取 Next.js 路由对象

    const onClick = () => {
        router.push("/auth/login"); // 手动导航
    };

    if(mode == "modal") {
        return (
            <span>
                TODO: modal implementation
            </span>
        );
    }

    return (
        <span onClick={onClick} className="cursor-pointer"> {children} </span>
    );
};