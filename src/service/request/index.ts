import axios from "axios";
import type { AxiosInstance } from "axios";
import type { WTRequestInterceptors, WTRequestConfig } from "./type";
import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";
const DEFAULT_LOADING = true;
class WTRequest {
  instance: AxiosInstance;
  interceptors?: WTRequestInterceptors;
  showLoading?: boolean;
  loadiing?: ILoadingInstance;
  constructor(config: WTRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config);
    //保存基本信息
    this.showLoading = config.showLoading || DEFAULT_LOADING;
    this.interceptors = config.interceptors;
    //使用拦截器
    //1、从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestIntercepter,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseIntercepter,
      this.interceptors?.responseInterceptorCatch
    );
    //2、添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loadiing = ElLoading.service({
            lock: true,
            text: "正在请求数据。。。",
            spinner: "el-icon",
          });
        }

        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        //移除loading
        this.loadiing?.close();

        if (res.data.code === -1) {
          console.log("错误处理");
        } else {
          return res.data;
        }
      },
      (err) => {
        //移除loading
        this.loadiing?.close();
        //判断不同httpErrCode显示不同信息
        if (err.response.status === 404) {
          console.log("err");
        }
        return err;
      }
    );
  }
  request<T>(config: WTRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestIntercepter) {
        config = config.interceptors.requestIntercepter(config);
      }
      if (config.showLoading == false) {
        this.showLoading = config.showLoading || true;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseIntercepter) {
            // res = config.interceptors.responseIntercepter(res);
          }
          console.log(res);
          resolve(res);
          //将showLoading设为true,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
        })
        .catch((err) => {
          //将showLoading设为true,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: WTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: WTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
}
export default WTRequest;
