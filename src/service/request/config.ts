/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 14:44:28
 */
let BASE_URL = "";
const TIME_OUT = 1000;

if (process.env.NODE_ENV === "development") {
  // BASE_URL = "http://123.207.32.32:8000/";
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "";
} else {
  BASE_URL = "";
}
export { BASE_URL, TIME_OUT };
