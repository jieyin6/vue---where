import Vue from 'vue'
import Router from 'vue-router'
import citySelect from '../components/city-select'
import index from '../components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/city',
      component: citySelect
    }
  ]
})
