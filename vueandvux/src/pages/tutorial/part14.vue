<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-AnotherResult></app-AnotherResult>
                <hr>
                <app-counter></app-counter>
                <app-AnotherCounter></app-AnotherCounter>
                <hr>
                <input type="text" :value="value" @input="updateValue">
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from '../../components/vuex/Counter'
import AnotherCounter from '../../components/vuex/AnotherCounter'
import Result from '../../components/vuex/Result'
import AnotherResult from '../../components/vuex/AnotherResult'

export default {
  data () {
  },
  computed: {
    value: {
      get () {
        return this.$store.getters.value
      },
      set (value) {
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$store.dispatch('updateValue', event.target.value)
    }
  },
  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
}
</script>
