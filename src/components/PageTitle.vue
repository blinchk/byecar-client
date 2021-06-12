<template>
  <div class="title">
    <h1 class="title"><slot/></h1>
    <h4 class="title__header-subtitle"><slot name="subtitle"></slot></h4>
    <hr class="title__divider" v-if="divider">
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    divider: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
