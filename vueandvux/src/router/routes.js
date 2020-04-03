// import page from '../pages/tutorial/part12.vue'
import headerTop from '../components/header-top.vue'
import headerBottom from '../components/header-bottom.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'apollo', component: () => import('pages/Index.vue') },
      { path: '/tutorial/part1', component: () => import('pages/tutorial/part1.vue') },
      { path: '/tutorial/part2', component: () => import('pages/tutorial/part2.vue') },
      { path: '/tutorial/part3', component: () => import('pages/tutorial/part3.vue') },
      { path: '/tutorial/part4', component: () => import('pages/tutorial/part4.vue') },
      { path: '/tutorial/part5', component: () => import('pages/tutorial/part5.vue') },
      { path: '/tutorial/part6', component: () => import('pages/tutorial/part6.vue') },
      { path: '/tutorial/part7', component: () => import('pages/tutorial/part7.vue') },
      { path: '/tutorial/part8', component: () => import('pages/tutorial/part8.vue') },
      { path: '/tutorial/part9', component: () => import('pages/tutorial/part9.vue') },
      { path: '/tutorial/part10', component: () => import('pages/tutorial/part10.vue'), name: 'part10' },
      { path: '/tutorial/part11', component: () => import('pages/tutorial/part11.vue') },
      { path: '/tutorial/part12/:id',
        name: 'part12',
        components: {
          default: () => import('pages/tutorial/part12.vue'),
          'header-top': headerTop,
          'header-bottom': headerBottom
        } },
      { path: '/tutorial/part13',
        component: () => import('pages/tutorial/part13.vue'),
        name: 'part13',
        beforeEnter: (to, from, next) => {
          console.log('Inside Rout Setup')
          next()
        }
      },
      { path: '/tutorial/part14', component: () => import('pages/tutorial/part14.vue') },
      { path: '/redirect-me', redirect: '/tutorial/part11' },
      { path: '/redirect-me2', redirect: { name: 'part10' } },
      { path: '*', redirect: '/tutorial/part11' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
