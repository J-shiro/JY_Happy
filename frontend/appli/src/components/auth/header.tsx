// 登录及注册界面头部组件: 包含 logo 和标题
import Image from "next/image";

interface HeaderProps {
    label: string;
    title: string; // 登录标题
}

export const Header = ({
    label,
    title
}: HeaderProps) => {
    return (
        <div className="flex w-full flex-col gap-y-2 justify-between items-center">
            <Image
                      alt="Logo"
                      height={50}
                      width={49}
                      className="mx-auto w-auto"
                      src="/images/logo.png"
                    />
            <h2 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-gray-900">
                {title}
            </h2>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};