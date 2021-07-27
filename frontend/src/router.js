import Vue from 'vue'
import VueRouter from 'vue-router'

import ExampleComponent from '@/components/ExampleComponent.vue'
import Home from '@/components/Home'
import Register from '@/components/Register'
//import Login from '@/components/Login'

const routes = [
  { path: "/", name: 'Home',  component: Home },
  { path: "/registrar", name: 'Register',  component: Register },
  //{ path: "/iniciar-sesion", name: 'Login',  component: Login },
  
  { path: "/ejemplo", name: 'Example',  component: ExampleComponent },
  { path: "/usuarios", name: "users", component: listUsers }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})
export default router
