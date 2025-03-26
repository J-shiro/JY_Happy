// 文档编辑器组件示例: TODO
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Editor() {
  const [content, setContent] = useState("");

  return (
    <div className="border p-4 rounded-md">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="开始输入..."
      />
      <Button className="mt-2">保存</Button>
    </div>
  );
}
