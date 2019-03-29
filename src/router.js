import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './components/Product.vue'
import Souvenir from './views/Souvenir.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      props: {
        product: {
          name: "Mantap",
          price: 100000,
        }
      }
    },
    {
      path: '/souvenir',
      name: 'Souvenir',
      component: Souvenir,
      props: {
        product: {
          name: "Mantap",
          price: 100000,
        }
      }
    }
  ]
})
