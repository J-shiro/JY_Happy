// 主界面: 首页
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-6 text-center">
          <LoginButton>
            <Button className="text-lg">登 录</Button>
          </LoginButton>
      </div>
    </main>
  );
}
