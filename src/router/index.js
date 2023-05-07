import { createRouter, createWebHistory } from 'vue-router'
// 父層
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
// 子層
import AboutHome from '../views/About/index.vue'
import Guide from '../views/About/Guide.vue'
import Reference from '../views/About/Reference.vue'
import Changelog from '../views/About/Changelog.vue'
import GitHub from '../views/About/GitHub.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      // 嵌套子路由 path 前面不能有/
      children: [
        {
          path: '',
          component: AboutHome,
        },
        {
          path: 'guide',
          component: Guide,
        },
        {
          path: 'reference',
          component: Reference,
        },
        {
          path: 'changelog',
          component: Changelog,
        },
        {
          path: 'gitHub',
          component: GitHub,
        },
      ],
    },
  ],
})

export default router
