# 1. Vue3 项目初始化（cmd 进入工作目录）

```bash
npm uninstall vite-plugin-devtools
```

# 2. 配置 vite.config.js 文件

```js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
```

# 3. 安装 Element Plus（cmd 进入工作目录）

```bash
npm install element-plus --save
```

# 4. 配置 src/main.js 文件

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(router).use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
```
---