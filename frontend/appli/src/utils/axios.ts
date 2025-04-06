// Axios 配置
import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api'

const  axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        // 获取本地存储的 token
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if(error.response){
            // 处理特定错误状态码
            if(error.response.status == 401){
                // 未授权, 清除本地 token 重定向到登录页
                localStorage.removeItem('token');
                window.location.href = '/auth/login';
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
