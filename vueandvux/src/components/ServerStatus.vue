<template>
 <div class="col-12">
   <p>Server Status: {{status}}</p>
   <hr>
   <button @click="changeStatus">Change Status</button>
 </div>
</template>

<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.

export default {
  data: function () {
    return {
      status: 'Critcal'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
