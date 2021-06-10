<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Routing Guards</h1>
          <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        </div>
      </div>
    </div>
</template>

<script>
// import { mdbContainer, mdbAlert } from 'mdbvue'
export default {
  beforeRouteEnter (to, from, next) {
    console.log('Guard Inside Component')
    // next(vm => { if you need to acces Vue Instance
    //   vm.link
    // })
    const auth = true
    if (auth) {
      next()
    } else {
      next(false)
    }
  },
  data () {
    return {
      confirmed: false
    }
  },
  methods: {

  },
  beforeRouteLeave (to, from, next) {
    if (this.confirmed) {
      next()
    } else {
      if (confirm('Are you Sure?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>

<style lang="scss">
</style<style>
