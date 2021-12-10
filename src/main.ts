/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 16:09:39
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from "./global";
import { setupStore } from "./store";
import wtRequest from "./service";
import axios from "axios";

import "normalize.css";
import "./assets/css/index.less";
const app = createApp(App);
// 0(app)
app.use(store).use(router).use(registerApp).mount("#app");
setupStore()
// interface DataType {
//   data: any;
//   retuenCode: string;
//   successs: boolean;
// }
// wtRequest.request<DataType>({
//     url: "/home/multidata",
//     method: "GET"
// })
// wtRequest.request<DataType>({
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
