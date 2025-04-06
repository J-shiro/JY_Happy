import axiosInstance from "@/utils/axios";
import * as z from "zod"
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    try {
        
        // 验证 values 是否符合 LoginSchema 的结构
        const validatedFields = LoginSchema.safeParse(values);

        if(!validatedFields.success){
            return {error: "请检查内容是否正确"}
        }

        const response = await axiosInstance.post('/auth/login', values );
        console.log('Login Successful:', response.data);

        // 存储 token 暂时为 undefined
        localStorage.setItem('token', response.data.token);

        return {success: "请求发送成功"}
    } catch (error: any) {
        console.error('Login Failed:', error.response?.data || error);
    }
};
