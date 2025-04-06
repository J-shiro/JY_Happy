import axiosInstance from "@/utils/axios";
import * as z from "zod"
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    try {

        const validatedFields = RegisterSchema.safeParse(values);

        if(!validatedFields.success){
            return {error: "请检查内容是否正确"}
        }
        
        // 发送注册请求
        const response = await axiosInstance.post('/auth/register', values );
        console.log('Register Successful:', response.data);
        
        if(response.data.err_message){
            return {error: response.data.err_message}
        }

        return {success: "用户创建成功"}
    } catch (error: any) {
        console.error('Register Failed:', error.response?.data || error);
    }
};
