import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    props: true
  },
  //   {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  // },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: Signup,
  // },
  //      {
  //   path: "/main",
  //   name: "Main",
  //   component: Main,
  //   props: true,
  // },

]

const router = new VueRouter({
  routes
})

export default router
