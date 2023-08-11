import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUP from '../views/SignUP.vue'
import MyPage from '../views/MyPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SignUP',
      name: 'SignUP',
      component: SignUP
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },

  ]
})

export default router
