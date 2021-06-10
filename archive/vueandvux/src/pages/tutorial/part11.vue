<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>HTTP</h1>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="user.username">
            <label>Mail</label>
            <input type="text" class="form-control" v-model="user.email">
            <button class="btn btn-primary" @click="submit">Submit</button>
            <hr>
            <input type="text" class="form-control" v-model="node">
            <br>
            <button class="btn btn-primary" @click="fetchData">Get Data</button>
            <ul class="list-group">
              <li class="list-groupe-item" v-for="(user, index) in users" :key="index">{{user.username}} - {{user.email}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import { mdbContainer, mdbAlert } from 'mdbvue'
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    submit () {
      // this.$http.post('https://vue-js-658f9.firebaseio.com/data.json', this.user) <- without Global options

      // commented out beacause using resources
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response)
      //   }, error => {
      //     console.log(error)
      //   })

      // Commented out for customresource
      // this.resource.save({}, this.user)
      this.resource.saveAlt(this.user)
    },
    fetchData () {
      // this.$http.get('data.json') replaced to be dynamic
      this.resource.getData({ node: this.node })
        .then(response => {
          return response.json()
        })
        .then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  created () {
    const customActions = {
      saveAlt: {
        method: 'POST',
        url: 'alternative.json'
      },
      getData: { method: 'GET' }
    }
    // Without Templating
    // this.resource = this.$resource('data.json', {}, customActions)
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
}
</script>

<style lang="scss">
</style<style>
