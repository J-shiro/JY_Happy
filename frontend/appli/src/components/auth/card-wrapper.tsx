// 登录卡片组件
"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({ 
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[700px] shadow-md">
            {/* 标题 */}
            <CardHeader>
                <Header label={headerLabel} /> 
            </CardHeader>
            {/* 内容 */}
            <CardContent>
                {children}
            </CardContent>
            {/* 可选: true 时渲染底部 Social 组件*/}
            {showSocial && (
                <CardFooter  className="flex items-center">
                    <Social />
                </CardFooter>
            )}
            {/* 跳转按钮: 注册 */}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};