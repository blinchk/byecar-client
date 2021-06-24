<template>
  <div id="report">
    <page-title divider>
      {{ $i18n.t('reportPage.somethingBotheringYou') }}
      <template v-slot:subtitle>{{ $i18n.t('reportPage.youCanReportAboutIt') }}</template>
    </page-title>
    <report-form/>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle'
import ReportForm from '../components/report-view/ReportForm'

export default {
  name: 'Report',
  components: {
    PageTitle,
    ReportForm
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
