import Vue from 'vue'
import VueRouter from 'vue-router'

import DialogWithLifecycle from '@/views/DialogWithLifecycle.vue'
import LoopColumnsInTable from '@/views/LoopColumnsInTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dialog with lifecycle',
    component: DialogWithLifecycle
  },
  {
    path: '/loop_columns_in_table',
    name: 'Loop columns in table',
    component: LoopColumnsInTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
