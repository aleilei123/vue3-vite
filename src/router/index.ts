// // 项目已采用约定式路由，获取src/views下的文件目录作为路由，无需手动配置
// import { createRouter, createWebHistory } from 'vue-router'
// import IndexLayout from "@/layouts/index.vue"
// import AboutLayout from "@/layouts/about.vue"
// // import HomeView from '../views/index.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: IndexLayout,
//       children: [
//         {
//             path: '',
//             component: () => import('../views/index.vue')
//         }
//       ]
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: IndexLayout,
//       children: [
//         {
//             path: '',
//             component: () => import('../views/about.vue')
//         }
//       ]
//     }
//   ]
// })

// export default router
