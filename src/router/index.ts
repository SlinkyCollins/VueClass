import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SignupView from '@/views/SignupView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import SignUpForm from '@/views/SignUpForm.vue'
import Login from '@/views/LogIn.vue'
import DashBoard from '@/views/DashBoard.vue';
import ParentEvent from '@/views/ParentEvent.vue'
import ChatParent from '@/views/ChatParent.vue'
import PiniaComponent from '@/views/PiniaComponent.vue'
import RegisterComponent from '@/views/RegisterComponent.vue'
import Validation from '@/views/Validation.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpForm,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedProperty.vue'),
    },
    {
      path: '/palindrome',
      name: 'palindrome',
      component: () => import('../views/PalindromeCP.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/ParamRoutes.vue'),
    },
    {
      path: '/blog/:id',
      name: 'blogView',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/parent',
      name: 'Parent',
      component: () => import('../views/ParentComponent.vue'),
    },
    {
      path: '/studentsignup',
      name: 'StudentSignUp',
      component: () => import('../views/StudentSignup.vue'),
    },
    {
      path: '/studentlogin',
      name: 'StudentLogin',
      component: () => import('../views/StudentLogin.vue'),
    },
    {
      path: '/:username',
      name: 'StudentDash',
      // props: true,
      component: () => import('../views/StudentDashboard.vue'),
    },
    {
      path: '/parentEmit',
      name: 'ParentEventEmitter',
      component: ParentEvent,
    },
    {
      path: '/chat',
      name: 'ChatParent',
      component: ChatParent,
    },
    {
      path: '/pinia',
      name: 'PiniaExample',
      component: PiniaComponent,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterComponent,
    },
    {
      path: '/vuelidate',
      name: 'Vuelidate',
      component: Validation,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: PageNotFound,
    }
  ],
})

export default router
