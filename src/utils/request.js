//封装axios
import axios from "axios";
const isDev = process.env.NODE_ENV === 'development'
const request = axios.create({
    // baseURL:isDev ? 'http://nz1908.wudaxun.top/api' : 'http://nz1908.wudaxun.top/api'
})

//请求拦截
request.interceptors.request.use((config)=>{
    //请求成功的时候
    config.headers['token'] = localStorage.getItem('token')
    return config;
},(err)=>{
    return Promise.reject(err);
})

//响应拦截
request.interceptors.response.use((config)=>{
        return config;
},(err)=>{
    return Promise.reject(err)
})

export default request;