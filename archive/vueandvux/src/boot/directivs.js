import Vue from 'vue'

// we globally register our component
Vue.directive('heighlight', {
  bind (el, binding, vnode) {
    // l.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})
