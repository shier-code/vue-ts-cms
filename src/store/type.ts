/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-09 13:43:40
 * @LastEditors: went
 * @LastEditTime: 2021-12-10 11:13:51
 */
import { ILoginState } from "./login/type";
export interface IRootState {
  name: string;
  age: number;
}
export interface IRootWithModule {
  login: ILoginState;
}
export type IStoreType = IRootState & IRootWithModule;
