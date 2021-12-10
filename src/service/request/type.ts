/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-07 14:57:45
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface WTRequestInterceptors<T=AxiosResponse> {
  requestIntercepter?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseIntercepter?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
export interface WTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WTRequestInterceptors;
  showLoading?: boolean;
}
