//封装axios
import axios from "axios";

const axios =axios.create({
    timeout:5000,//设置请求超时时间
    withCredentials:true//跨域请求的时候是否需要凭证 
})

//请求拦截
axios.interceptors.request.use((config)=>{
    //请求成功的时候
    if(config.method=="get"){
        config.params={...config.data};
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})

//响应拦截
axios.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default axios;