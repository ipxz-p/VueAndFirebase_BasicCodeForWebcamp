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
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/3.SearchData.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import('../views/4.SortingData.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
