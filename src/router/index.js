import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/index/index'
import setting from '@/components/setting'
import user from '@/components/user'
import tel_pass_manage from '@/components/tel_pass_manage'
import change_user from '@/components/change_user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/setting/',
      name: 'setting',
      component: setting
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/tel_pass_manage',
      name: 'tel_pass_manage',
      component: tel_pass_manage
    },
    {
      path: '/change_user',
      name: 'change_user',
      component: change_user
    }

  ]
})
