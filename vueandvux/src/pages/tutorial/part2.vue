<style lang="scss">
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>
<template>
  <q-page class="row justify-center">
    <div class=col-12>
      <h2>Author List</h2>
      <ul>
        <li v-for="item in author" :key="item.id" >
          {{ item.name }} - {{ item.email }}
        </li>
      </ul>
    </div>
    <div class="col-12">
      <p v-if="show">You can see me!</p>
      <p v-else>Now you see me!</p>
      <template v-if="show">
        <h1>Heading</h1>
        <p>Inside a Template</p>
      </template>
      <p v-show="show">you can also see me?</p>
      <button @click="show = !show">show/Hide</button>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <ul>
        <li v-for="(ingredient, i) in ingredients" :key="ingredient">
          {{ ingredient }} ({{ i }})
        </li>
      </ul>
      <button @click="ingredients.push('spices')">Add New</button>
      <hr>
      <template v-for="(ingredient, i) in ingredients">
        <h1 :key="ingredient">{{ ingredient }}</h1>
        <p :key="ingredient">{{i}}</p>
      </template>
      <hr>
      <ul>
        <li v-for="person in persons" :key="person">
          <div v-for="(value, key, index) in person" :key="value">{{key}}: {{value}} ({{index}})</div>
        </li>
      </ul>
      <hr>
      <span v-for="n in 10" :key="n">{{n}}</span>
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'

const authorQuery = gql`
  query {
    author: allUsers{email, name, id}
  }`

export default {
  name: 'PageIndex',
  data () {
    return {
      show: true,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Max', age: 27, color: 'red' },
        { name: 'Anna', age: 'unkonwn', color: 'blue' }
      ]
    }
  },
  apollo: {
    // Simple query that will update the 'author' vue property
    author: authorQuery
  }
}

</script>
