// 验证页面根布局
const AuthLayout = ({ children } : {children: React.ReactNode}) => {
    return (
        <div className="flex h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
            {children}
        </div>
    );
};

export default AuthLayout;