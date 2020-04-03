<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Routing</h1>
          <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
          <p>Loaded ID: {{id}}</p>
          <p>local: {{ $route.query.locale }}</p>
          <p>Q: {{ $route.query.q }}</p>
          <div style="height: 700px"></div>
          <p id="data">Data</p>
        </div>
      </div>
    </div>
</template>

<script>
// import { mdbContainer, mdbAlert } from 'mdbvue'
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
    }
  },
  methods: {
    navigateToHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
</style<style>
