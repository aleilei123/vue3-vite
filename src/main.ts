import './style/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// import router from './router'
import { createRouter, createWebHistory } from 'vue-router'
//自动读取src/view文件目录作为路由
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
console.log('setupLayouts-->', setupLayouts)
const routes = setupLayouts([
  ...generatedRoutes,
  {
    path: '/index',
    name: 'defaultIndex',
    props: true,
    component: () => import('@/views/index.vue')
  }
])
const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
