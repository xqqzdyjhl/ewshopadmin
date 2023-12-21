// 1.引入 axios异步网络封装
import axios from "axios";
//2.axios创建对象
const request = axios.create({
        baseURL:"https://api.shop.eduwork.cn" , //管理后台要使用的接口的基地址
        timeout:8000  //超时时间
})


//3. 定义前置拦截，请求拦截器,请求发送出去后触发的
request.interceptors.request.use((config)=>{
    //config 接口请求的配置信息
    return config
},(error)=>{
    //报错时触发报错信息
    return Promise.reject(error)
})

//4.定义后置拦截器，响应拦截器，服务器响应回来数据之前触发
request.interceptors.response.use((response)=>{
    //响应回来的数据操作
    return response.data
},(error)=>{
    //报错时触发报错信息
    return Promise.reject(error)
})


// 5.抛错对象的信息
export default request

