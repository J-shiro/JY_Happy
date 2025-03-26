// 社区论坛页面示例: TODO
import Post from "./post";
import { Card } from "@/components/ui/card";

const posts = [
  { id: 1, title: "Next.js 14 新特性", content: "Server Actions 真香！" },
  { id: 2, title: "shadcn/ui 好用吗？", content: "组件库很轻量，推荐！" },
];

export default function CommunityPage() {
  return (
    <Card className="p-4">
      <h1 className="text-2xl font-bold mb-4">社区论坛</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Card>
  );
}
