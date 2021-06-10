<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 500})">Increment (Async)</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 100, duration: 500})">Decrement (Async)</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'asyncIncrement',
      'asyncDecrement'
    ])
    // increment (by) { same as above
    //   this.$store.dispatch('increment', by)
    // }
  }
}
</script>
