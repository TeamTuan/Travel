import Vue from 'vue'
import Router from 'vue-router'
import place from '@/components/place'
import child_place from '@/components/child_place'
import reply from '@/components/reply'
import setting from '@/components/setting'
import user from '@/components/user'
import tel_pass_manage from '@/components/tel_pass_manage'
import change_user from '@/components/change_user'
import travel_notes from '@/components/travel-notes'
import child from '@/components/login'
import add_notes from '@/components/add_notes'
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
    },
    {
      path:'/child_place',
      name:'child_place',
      component:child_place
    },
    {
      path:'/reply',
      name:'reply',
      component:reply
    },
    //{
    //  path:'/place',
    //  name:'place',
    //  component:place
    //},
    {
      path:'/child_place',
      name:'child_place',
      component:child_place
    }
  ]
})
