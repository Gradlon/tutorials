import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://vue-js-658f9.firebaseio.com/'
// Disable interceptor! to get mor clarity of what is happening
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  })
})
