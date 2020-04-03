<template>
  <div>
    <h3>New Author</h3>
    <button @click="counter++">Incrrease</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    }
  },
  destroyed () {
    console.log('destoyed')
  },
  deactivated () {
    console.log('Deactivated')
  },
  activated () {
    console.log('Activated')
  }
}
</script>

<style scoped>

</style>
