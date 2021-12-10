/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-09 14:19:13
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 15:21:19
 */
import wtRequest from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";
enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/", // 用法: role/1/menu
}
export function accountLoginRequest(account: IAccount) {
  return wtRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}
export function requestUserInfoById(id: number) {
  return wtRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false,
  });
}

export function requestUserMenusByRoleId(id: number) {
  return wtRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false,
  });
}
