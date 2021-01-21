import Vue from 'vue'
import VueRouter from 'vue-router'

import DialogWithLifecycle from '@/views/DialogWithLifecycle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dialog with lifecycle',
    component: DialogWithLifecycle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
