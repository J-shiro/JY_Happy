// 侧边栏组件
"use client"; // 客户端渲染

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // 创建组件本地状态
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, FileText, MessageSquare, ShoppingBag, Headset, Menu } from "lucide-react"; // 图标

const menuItems = [
  { name: "共享文档", href: "/dashboard/docs", icon: FileText },
  { name: "社区", href: "/dashboard/community", icon: Home },
  { name: "聊天", href: "/dashboard/chat", icon: MessageSquare },
  { name: "商城", href: "/dashboard/mall", icon: ShoppingBag },
  { name: "个人", href: "/personal", icon: Headset }

];

export default function Sidebar() {
  const pathname = usePathname(); // 获取当前页面 URL 路径
  const [collapsed, setCollapsed] = useState(false); // arg2: 更新状态函数

  return (
    <aside className={cn(
      // bg-gray-900: 背景色 text-white: 文字颜色 transition-[width] duration-300 ease-in-out: 平滑过渡
      "w-64 h-screen bg-gray-900 text-white p-4 flex flex-col overflow-hidden transition-[width] duration-300 ease-in-out",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => setCollapsed(!collapsed)} // 折叠
          className = "mb-4 flex items-center"
        >
          <Menu className = "w-6 h-6" /> {/* 菜单图标 */}
        </Button>
      </div>
      <nav className="flex flex-col space-y-2">
        {/* map 遍历菜单项 */}
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative flex items-center px-4 py-2 rounded-md transition-300 transition-colors duration-300",
              pathname === href ? "bg-gray-700" : "hover:bg-gray-800", // 悬停突出显示
              collapsed ? "justify-center" : "justify-start" 
            )}
          >
            <Icon className="w-6 h-6 min-w-6 shrink-0" />
            <span className={cn("absolute left-12 whitespace-nowrap ransition-opacity duration-300", collapsed && "hidden")}>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
