import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
  ]
})
