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
      <h3 v-once>{{title}}</h3>
      <p>{{ sayHello() }} - <a v-bind:href="link">Google</a><a :href="link">Google</a></p>
      <hr>
      <p v-html="finishedLink"></p>
      <hr>
      <button @click="increase(2, $event)">click me!</button>
      <button v-on:click="counter++">Inline</button>
      <button v-on:click="decrease">Decrease</button>
      <p>{{ counter }} </p>
      <p>Result Rendeted each time: {{ result() }} / Result Rendeted each time: {{ output }}</p>
      <p v-on:mousemove="updateCoordinates">
        Coordinates: {{ x }} / {{ y }}
        - <span v-on:mousemove.stop=""> DEAD SPOT </span>
        </p>
        <input type="text" v-on:keyup.enter="alertMe">
        <hr>
        <input type="text" v-model="name">
        <p>{{ name }}</p>
        <div class="demo" @click="attachRed = !attachRed" :class="{'red': attachRed, blue: !attachRed}"></div>
        <div class="demo" :class="{'red': attachRed}"></div>
        <div class="demo" :class="divClasses"></div>
        <div class="demo" :class="[color, {red: attachRed}]"></div>
        <div class="demo" :style="{'background-color': cssColor}"></div>
        <div class="demo" :style="{backgroundColor: cssColor}"></div>
        <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
        <hr>
        <input type="text" v-model="color">
        <input type="text" v-model="cssColor">
        <input type="text" v-model="width">
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
      author: '',
      title: 'Tutorial',
      link: 'https://google.com',
      finishedLink: '<a href="http://google.com">Google</a>',
      counter: 0,
      x: '',
      y: '',
      name: 'Gradlon',
      attachRed: false,
      color: 'green',
      cssColor: 'gray',
      width: 100
    }
  },
  computed: {
    output: function () {
      console.log('Computed') // no Async but more Performant
      return this.counter > 5 ? 'Greater 5' : 'smaler than 5'
    },
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.cssColor,
        width: this.width + 'px'
      }
    }
  },
  watch: {
    counter: function (value) {
      console.log('Watch') // can be async but less perfromant as Computed
      var vm = this
      setTimeout(function () {
        vm.counter = 0
      }, 2000)
    }
  },
  methods: {
    sayHello: function () {
      this.title = 'Hello'
      return this.title
    },
    increase: function (step, event) {
      this.counter += step
      // this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    decrease: function () {
      this.counter--
      // this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    result: function () {
      console.log('Method')
      return this.counter > 5 ? 'Greater 5' : 'smaler than 5'
    },
    dummy: function (event) {
      event.stopPropagation()
    },
    alertMe: function () {
      alert('Allert')
    }
  },
  apollo: {
    // Simple query that will update the 'author' vue property
    author: authorQuery
  }
}

</script>
