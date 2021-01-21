import Vue from 'vue'
import VueRouter from 'vue-router'

import DialogWithLifecycle from '@/views/DialogWithLifecycle.vue'
import LoopColumnsInTable from '@/views/LoopColumnsInTable.vue'
import SelectboxWithKeywordFiltering from '@/views/SelectboxWithKeywordFiltering.vue'

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
  },
  {
    path: '/selectbox_with_keyword_filtering',
    name: 'Select box with keyword filtering',
    component: SelectboxWithKeywordFiltering
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
