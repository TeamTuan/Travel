import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/review'
import setting from '@/components/setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    }
    ,{
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
