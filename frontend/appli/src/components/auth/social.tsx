// 社交账号登录组件: Google, Github
"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex justify-center w-full gap-4">
            <Button
                className="w-full max-w-[50%]"
                variant="outline"
                size="lg"
                onClick={() => {}}
            >
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button
                className="w-full max-w-[50%]"
                variant="outline"
                size="lg"
                onClick={() => {}}
            >
                <FaGithub className="h-5 w-5"/>
            </Button>
        </div>
    )
};