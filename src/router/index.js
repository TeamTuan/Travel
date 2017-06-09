import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/index/index'
import setting from '@/components/setting'
import user from '@/components/user'
import tel_pass_manage from '@/components/tel_pass_manage'
import change_user from '@/components/change_user'
import travel_notes from '@/components/travel-notes'
import add_notes from '@/components/add_notes'
import user_name from '@/components/user_name'
import user_introduction from '@/components/user_introduction'
import place from '@/components/place'
import child_place from '@/components/child_place'
import reply from '@/components/reply'
import login_ma from '@/components/login_ma'
import register_ma from '@/components/register_ma'
import publish_notes from '@/components/publish_notes'
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
    }
    ,
    {
      path: '/add_notes',
      name: 'add_notes',
      component: add_notes
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
    },
    {
      path: '/place',
      name: 'place',
      component: place
    },
    {
      path: '/child_place/:value',
      name: 'child_place',
      component: child_place
    },
    {
      path: '/reply/:id/:value',
      name: 'reply',
      component: reply
    },
    {
      path: '/login_ma',
      name: 'login_ma',
      component: login_ma
    },
    {
      path: '/register_ma',
      name: 'register_ma',
      component: register_ma
    },
    {
      path: '/publish_notes/:id',
      name: 'publish_notes',
      component: publish_notes
    }
  ]
})
