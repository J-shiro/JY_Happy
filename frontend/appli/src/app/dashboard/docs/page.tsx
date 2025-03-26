// 文档页面示例: TODO
"use client";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

const Editor = dynamic(() => import("./editor"), { ssr: false });

export default function DocsPage() {
  return (
    <Card className="p-4">
      <h1 className="text-2xl font-bold mb-4">共享文档</h1>
      <CardContent>
        <Editor />
      </CardContent>
    </Card>
  );
}
