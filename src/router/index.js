import Vue from 'vue'
import Router from 'vue-router'
import VueXgplayerDemo from '@/components/xgplayer-vue-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xgplayer-vue-demo',
      component: VueXgplayerDemo
    }
  ]
})
