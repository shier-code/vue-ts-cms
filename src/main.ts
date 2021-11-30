/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-11-30 11:52:24
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from './global';
// import hyRequest from './service';
import axios from 'axios';

const app = createApp(App)
// 0(app)
app.use(store).use(router).use(registerApp).mount("#app");

interface DataType {
    data: any
    retuenCode: string
    successs: boolean
}
// hyRequest.request<DataType>({
//     url: "/home/multidata",
//     method: "GET"
// })
// hyRequest.request<DataType>({
//     url: "/home/multidata",
//     method: "GET",
//     // showLoading: false,
//     interceptors: {
//         requestIntercepter: (config) => {
//             console.log("单独请求的config");
//             return config
//         },
//         responseIntercepter: (res) => {
//             return res
//         }
//     }
// }).then(res=>{
//     console.log(res);
// })
