/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-12-09 13:42:04
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 15:53:04
 */
export interface ILoginState {
  token: string;
  userInfo: any;
  userMenus: any;
  permissions: string[];
}
