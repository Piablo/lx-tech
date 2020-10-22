import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginUser from '../modals/LoginUser.vue';
import RegisterUser from '../modals/RegisterUser.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      loginUser: LoginUser,
      registerUser: RegisterUser
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: function () {
      return import('../views/Dashboard.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
