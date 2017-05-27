import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/index'
import setting from '@/components/setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
    ,{
      path: '/setting',
      name: 'setting',
      component: setting
    }

  ]
})
