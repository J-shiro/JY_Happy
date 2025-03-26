// 社区论坛帖子组件示例: TODO
interface PostProps {
    post: {
      title: string;
      content: string;
    };
  }

export default function Post({ post } : PostProps) {
    return (
      <div className="border-b py-2">
        <h2 className="font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.content}</p>
      </div>
    );
  }
  