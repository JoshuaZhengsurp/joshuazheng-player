import axios, {  InternalAxiosRequestConfig } from 'axios'


const request = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    timeout: 10000,
    withCredentials: true, //?
});

// 请求拦截器
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.params = {
            ...config.params,
            timestamp: Date.now()
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => response
    ,
    (error) => {
        return Promise.reject(error);
    }
)

export default request;
export { request };
