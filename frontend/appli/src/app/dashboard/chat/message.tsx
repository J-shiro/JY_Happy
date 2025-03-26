// 聊天消息框组件示例: TODO
interface MessageProps {
    message: {
      user: string;
      text: string;
    };
  }

export default function Message({ message } : MessageProps) {
    return (
      <div className="border-b py-2">
        <strong>{message.user}:</strong> {message.text}
      </div>
    );
  }
  