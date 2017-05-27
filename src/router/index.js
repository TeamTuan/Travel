import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/change_user.vue'
import setting from '@/components/setting.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/setting/',
      name: 'setting',
      component: setting
    }
  ]
})
