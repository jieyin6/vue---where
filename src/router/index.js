import Vue from 'vue'
import Router from 'vue-router'
import citySelect from '../components/city-select'
import index from '../components/index/index'
import detailComponent from '../components/detail-component'
import searchBox from '../components/search-box'

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
    },
    {
      path: '/detail',
      component: detailComponent
    },
    {
      path: '/search',
      component: searchBox
    }
  ]
})
