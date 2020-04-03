import Vue from 'vue'

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase()
})
