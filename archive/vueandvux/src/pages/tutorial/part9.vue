<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters & Mixins</h1>
          <p>{{text | to-uppercase | to-lowercase}}</p>
          <hr>
          <button @click="fruits.push('Berries')">Add New Item</button>
          <input v-model="filterText">
          <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
          </ul>
          <hr>
          <appList></appList>
        </div>
      </div>
    </div>
</template>

<script>
import List from '../../components/list'
export default {
  data () {
    return {
      text: 'Hello there',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    'to-uppercase' (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>

</style>
