import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TeamCollect from './views/TeamCollect.vue'
import TeamData from './views/TeamData.vue'
import TeamProject from './views/TeamProject.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/collect',
      name: 'collect',
      component: TeamCollect
    },
    {
      path: '/data',
      name: 'data',
      component: TeamData
    },
    {
      path: '/project',
      name: 'project',
      component: TeamProject
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
