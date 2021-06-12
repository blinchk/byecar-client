<template>
  <div id="report">
    <page-title divider>
      Something bothering you?
      <template v-slot:subtitle>You can report about it right now.</template>
    </page-title>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle'

export default {
  name: 'Report',
  components: {
    PageTitle
  }
}
</script>

<style scoped lang="scss">
.report {
  &__divider {
    border-color: gray;
  }
}
</style>
