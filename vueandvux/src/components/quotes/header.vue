<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <q-linear-progress size="25px" :value="(quoteCount / maxQuotes)" color="accent">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="(quoteCount / maxQuotes * 100) + '%'" />
        </div>
      </q-linear-progress>
      {{quoteCount}} / {{ maxQuotes }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['quoteCount', 'maxQuotes'],
  data: function () {
    return {
      progress1: 0.3
    }
  },
  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    }
  }
}
</script>
<style scoped>
.progress {
  margin-top: 40px;
}
</style>
