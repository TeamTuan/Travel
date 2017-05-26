import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: indexpage
    }
  ]
})
