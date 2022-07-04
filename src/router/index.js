import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/1.CreateDeleteEdit.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/2.EditPage.vue'),
    props: true,
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
