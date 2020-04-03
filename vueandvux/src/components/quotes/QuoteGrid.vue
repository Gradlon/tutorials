<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from '../../components/quotes/Quote'
export default {
  props: ['quotes'],
  components: {
    'app-quote': Quote
  },
  methods: {
    deleteQuote (index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>
