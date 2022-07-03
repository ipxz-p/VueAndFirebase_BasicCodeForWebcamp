import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/createPost.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/editPost.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
