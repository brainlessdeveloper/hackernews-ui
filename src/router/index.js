import Vue from 'vue'
import Router from 'vue-router'

import Discussion from '@/components/Discussion'

import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hackernews',
      component: Index,
    },
    {
      path: '/discuss/:id',
      name: 'Hackernews Discussion',
      component: Discussion,
      props: true,
    },
  ],
})
