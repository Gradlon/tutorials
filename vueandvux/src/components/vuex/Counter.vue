<template>
    <div>
        <button class="btn btn-primary" @click="increment(200)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>
