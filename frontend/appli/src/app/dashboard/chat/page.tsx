// 聊天界面示例: TODO
import Message from "./message";
import { Card } from "@/components/ui/card";

const messages = [
  { id: 1, user: "Alice", text: "你好！" },
  { id: 2, user: "Bob", text: "Hi, how are you?" },
];

export default function ChatPage() {
  return (
    <Card className="p-4">
      <h1 className="text-2xl font-bold mb-4">聊天</h1>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </Card>
  );
}
