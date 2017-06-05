import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/index/index'
import setting from '@/components/setting'
import user from '@/components/user'
import tel_pass_manage from '@/components/tel_pass_manage'
import change_user from '@/components/change_user'
import travel_notes from '@/components/travel-notes'
import child from '@/components/login'
import add_notes from '@/components/add_notes'
import login from '@/components/login'
import user_name from '@/components/user_name'
import user_introduction from '@/components/user_introduction'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/setting',
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
    },
    {
      path: '/travel_notes',
      name: 'travel_notes',
      component: travel_notes
    },
    {
      path: '/child',
      name: 'child',
      component: child
    }
    ,
    {
      path: '/add_notes',
      name: 'add_notes',
      component: add_notes
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/user_name',
      name: 'user_name',
      component: user_name
    }
    ,
    {
      path: '/user_introduction',
      name: 'user_introduction',
      component: user_introduction
    }
  ]
})
