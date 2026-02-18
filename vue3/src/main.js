import { createApp } from 'vue'
import ElementPlus from 'element-plus'  //引入组件库
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(router).use(ElementPlus,{
    locale: zhCn
})

app.mount('#app')
