<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-12 text-center">
        <div class="alert alrt-info">
          Click to delete Quote {{maxQuotes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from '../../components/quotes/QuoteGrid'
import NewQuote from '../../components/quotes/NewQuote'
import Header from '../../components/quotes/header'

export default {
  data: function () {
    return {
      maxQuotes: 10,
      quotes: [
        'Just a Quote to see something'
      ]
    }
  },
  methods: {
    newQuote (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please Delete Qutes first')
      }
      this.quotes.push(quote)
    },
    deleteQuote (index) {
      this.quotes.splice(index, 1)
    }
  },
  components: {
    'app-quote-grid': QuoteGrid,
    'app-new-quote': NewQuote,
    'app-header': Header
  }
}
</script>

<style>
</style>
