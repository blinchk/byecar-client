<template>
  <div id="report">
    <div class="report__header">
      <h1 class="report__header-title">Something bothering you?</h1>
      <h4 class="report__header-subtitle">You can report about it right now.</h4>
      <hr class="report__divider">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Report'
}
</script>

<style scoped lang="scss">
.report {
  &__divider {
    border-color: gray;
  }
}
</style>
