import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/pages/HomeView'
import DetailView from '@/pages/DetailView'
import PostView from '@/pages/PostView'
import CameraView from '@/pages/CameraView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    }
  ]
})
