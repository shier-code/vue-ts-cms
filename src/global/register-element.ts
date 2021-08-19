import { App } from 'vue';
import { ElButton, ElForm } from 'element-plus';
import 'element-plus/lib/theme-chalk/base.css';
const components = [ElButton, ElForm]
export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component)
    }
}