import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'store',
      component: () => import('/src/components/StoreComp.vue')
    },
    {
      path: '/log-in',
      name: 'login',
      component: () => import('/src/components/LogInComp.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('/src/components/RegisterComp.vue')
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('/src/components/CartComp.vue')
    },
    {
      path: '/product-mgmt',
      name: 'product-mgmt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('/src/components/CrudProduct.vue')
    }
  ]
})

export default router
