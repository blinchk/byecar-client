<template>
  <div class="select-box-large" v-if="large">
    <label for="select-box-input-large" class="select-box-label-large" v-if="label">{{ label }}</label>
    <select name="select-box-input-large" id="select-box-input-large" class="select-box-input-large">
      <option :value="option.value" :key="option.value" v-for="option in values">{{ option.text }}</option>
    </select>
  </div>
  <div class="select-box" v-else>
    <label for="select-box-input" v-if="label">{{ label }}</label>
    <select name="select-box-input" id="select-box-input">
        <option :value="option.value" :key="option.value" v-for="option in values">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    values: {
      type: Array,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.select-box-large {
  display: flex;
  flex-direction: column;
  .select-box-label-large {
    margin-bottom: 5px;
  }
  .select-box-input-large {
    padding: 10px;
    transition: all 0.3s;
    border: solid 1.5px #48BF84;
    &:hover {
      border: solid 1.5px #50e898;
      transform: scale(1.05);
      margin: 5px 0;
    }
    &:focus {
      border: solid 1.5px #50e898;
    }
    border-radius: 3px;
  }
}
</style>
