/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-11-30 11:20:54
 */
//service统一出口
import HYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestIntercepter: (config) => {
      console.log("success intercepter");
      //携带token
      const token = "thisistoken";
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    },
    requestInterceptorCaatch: (err) => {
      return err;
    },
    responseIntercepter: (config) => {
      return config;
    },
    // responseInterceptorCaatch: (err) => {
    //     return err
    // }
  },
});
export default hyRequest;
