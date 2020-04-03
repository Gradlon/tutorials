<template>
 <div class="col-12">
   <p>
     {{hello}}
   </p>
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
      hello: 'Hello From LocalComp',
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

<style>
/* This is where your CSS goes */
</style>
