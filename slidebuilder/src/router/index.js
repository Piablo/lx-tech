import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddCourse from '../modals/AddCourse';
import AddLesson from '../modals/AddLesson';
import TaskLog from '../modals/TaskLog';
import TaskList from '../modals/TaskList';
import WorkPaused from '../modals/WorkPaused';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      addCourse: AddCourse,
      addLesson: AddLesson,
      taskLog: TaskLog,
      taskList: TaskList,
      workPaused: WorkPaused
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
