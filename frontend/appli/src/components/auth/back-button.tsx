// 可复用跳转按钮组件
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
};

export const BackButton = ({
    label,
    href
}: BackButtonProps) => {
    return (
        // asChild: 使 <Button> 不默认渲染 <button> 而直接将子元素 <Link> 作为根元素, 此时 <Button> -> <a> 标签
        // next/link 不能包裹 <button>
        <Button variant="link" className="w-full font-normal" size="sm" asChild>
            <Link href={href}>
                {label}
            </Link>
            {/* next/link 不刷新整个页面, 只局部加载 */}
        </Button>
    )
};