import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'about',
    component: () => import('../views/EditView.vue')
  },
  {
    path: '/chats/:id',
    name: 'chats',
    component: () => import('../views/EditView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
