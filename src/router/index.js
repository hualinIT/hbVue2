import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import NoticeList from '@/views/NoticeList'
import NoticeDetail from '@/views/NoticeDetail'
import Products from '@/views/Products'


import Hello from '@/components/Hello'
import Nav from '@/components/Nav'
import sider1 from '@/components/sider1'
import sider2 from '@/components/sider2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/noticelist',
      name: 'noticelist',
      component: NoticeList
    },
     {
      path: '/noticelist/:nid',
      name: 'noticedetail',
      component: NoticeDetail
    },
     {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
      children:[
          {
            path: 'sider1',
            component: sider1
          },
          {
            path: 'sider2',
            component: sider2
          }
      ]
    }
  ]
})
