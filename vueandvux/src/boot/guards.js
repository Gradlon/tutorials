export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    console.log('router Guards')
    next()
    // next(false) //abort
    // next('/path')
    // next({name: 'part13'})
  })
}
