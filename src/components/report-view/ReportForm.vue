<template>
  <div class="report-view">
    <form class="report-form">
      <select-box :values="violenceTypes" :label="$i18n.t('reportForm.selectViolationType')" large class="violence-select"/>
    </form>
    <div class="report-form-footer">
      <Button type="report-form">Next</Button>
    </div>
  </div>
</template>

<script>
import SelectBox from '../general/SelectBox'
import Button from '../general/Button'

export default {
  components: {
    SelectBox,
    Button
  },
  computed: {
    violenceTypes () {
      return [{
        value: 1 << 0,
        text: this.$i18n.t('violationTypes.parkingBicycleRoad')
      }, {
        value: 1 << 1,
        text: this.$i18n.t('violationTypes.parkingProhibitedArea')
      }, {
        value: 1 << 2,
        text: this.$i18n.t('violationTypes.rideProhibitedArea')
      }, {
        value: 1 << 3,
        text: this.$i18n.t('violationTypes.planningMistakes')
      }]
    }
  }
}
</script>

<style lang="scss">
.report-form {
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
  &-footer {
    display: inline-flex;
    justify-content: center;
    width: 100%;
  }
  .violence-select {
    width: 500px;
  }
}

@media only screen and (max-width: 750px) {
  .report-form {
    .violence-select {
      width: 300px;
    }
  }
}
</style>
