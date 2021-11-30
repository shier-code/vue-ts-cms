import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HYRequestInterceptors {
  requestIntercepter?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCaatch?: (error: any) => any;
  responseIntercepter?: (res: any) => any;
  responseInterceptorCaatch?: (error: any) => any;
}
export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors;
  showLoading?: boolean;
}
