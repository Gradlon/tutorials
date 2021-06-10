<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
  <mdb-card class="card-body" style="width: 22rem; margin-top: 1rem;">
    <mdb-card-title></mdb-card-title>
    <mdb-card-text><slot></slot></mdb-card-text>
    <div class="flex-row">
      <a></a>
      <a style="margin-left: 1.25rem"></a>
    </div>
  </mdb-card>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .panel-body {
    font-size: 24px;
    color: #6e6e6e
  }
  .card-body {
    cursor: pointer;
  }
  .card-body:hover {
    background-color: #ffe2e2 !important;
  }
</style>
