// 根布局文件
import type { Metadata } from "next"; // 元数据
import { Geist, Geist_Mono } from "next/font/google"; // Google 字体
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans", // CSS 自定义变量名
  subsets: ["latin"], // 加载字符集
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 页面元信息
export const metadata: Metadata = {
  title: "JY HAPPY app",
  description: "try to be better",
};

export default function RootLayout({
  children, // TypeScript 类型定义
}: Readonly<{ // 只读
  children: React.ReactNode; // 任何可在 React 中渲染的内容
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // 抗锯齿
      >
        {children}
      </body>
    </html>
  );
}
