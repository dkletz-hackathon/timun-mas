import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlaceList from './components/PlaceList'
import ProductList from './components/PlaceDetail/ProductList'
import Product from './components/PlaceDetail/Product.vue'
import Souvenir from './views/Souvenir.vue'
import PlaceDetail from './views/PlaceDetail.vue'
import Order from './views/Order.vue'
import Transaction from './views/Transaction'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: PlaceList
    },
    {
      path: '/list-placeDetail',
      name: 'list-placeDetail',
      component: ProductList
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
      path: '/placeDetail',
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
      path: '/transaction/:id',
      name: 'Transaction',
      component: Transaction,
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
    },
    {
      path: '/detail/:id',
      name: 'PlaceDetail',
      component: PlaceDetail,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      props: true
    }
  ]
})
