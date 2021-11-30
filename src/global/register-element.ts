/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-11-30 09:46:10
 */
import { App } from 'vue';
import { ElButton, ElForm } from 'element-plus';
import 'element-plus/lib/theme-chalk/base.css'
const components = [ElButton, ElForm]
export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component)
    }
}