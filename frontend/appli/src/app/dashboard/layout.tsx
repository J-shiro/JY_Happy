// dashboard 布局
import Sidebar from "@/components/homeui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    // h-screen: 100% 高度主布局 flex: 弹性布局
    
    <main className="flex h-screen"> 
      <Sidebar />
      {/* flex-1: 占据剩余空间 p-6: 6 单位内边距 overflow-auto: 自动加滚动条 */}
      <section className="flex-1 p-6 overflow-auto">{children}</section>
    </main>
  );
}
