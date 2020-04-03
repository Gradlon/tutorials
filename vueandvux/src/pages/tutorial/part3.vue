<style lang="scss">

</style>
<template>
  <q-page class="row justify-center">
    <div class="col-12">
      <my-cmp></my-cmp>
      <hr>
      <mycmplocal></mycmplocal>
      <cmplocal></cmplocal>
    </div>
    <hr>
    <div class="col-12">
      <ServerStatus v-for="server in 5" v-bind:key="server"></ServerStatus>
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
import mycmplocal from '../../components/MyCMP-local'
import ServerStatus from '../../components/ServerStatus'
const authorQuery = gql`
  query {
    author: allUsers{email, name, id}
  }`

export default {
  name: 'PageIndex',
  data () {
    return {
      show: true
    }
  },
  components: {
    mycmplocal,
    'cmplocal': mycmplocal,
    ServerStatus
  },
  apollo: {
    // Simple query that will update the 'author' vue property
    author: authorQuery
  }
}

</script>
