import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/login',
      component: resolve => require(['@/pages/Login'], resolve)
    },
    {
      path: '/',
      // name: 'Index'
      component: resolve => require(['@/frame/Index'], resolve),
      children: [
        {path: '/', component: resolve => require(['@/pages/BaseInfo'], resolve)},
        {path: '/baseInfo', component: resolve => require(['@/pages/BaseInfo'], resolve)},
        {path: '/mongoose', component: resolve => require(['@/pages/Mongoose'], resolve)}
      ]
    }
  ]
})
