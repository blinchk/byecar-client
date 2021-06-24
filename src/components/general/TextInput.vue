<template>
  <div class="lg-input" v-if="large">
      <label for="input" class="lg-input-box-label" v-if="label">{{ label }}</label>
      <input :type="type" id="input-box" class="lg-input-box"/>
  </div>
  <div class="input" v-else>
    <label for="input-box" v-if="label" class="input-box-label">{{ label }}</label>
    <input :type="type" id="input-box" class="input-box"/>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: false
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  .input-box {
  border: 0;
  padding: 5px 2.5px;
  border-bottom: solid 1px gray;
  &:active, &:focus {
    outline: none;
  }

  &-label {
    font-size: 12pt;
    margin-right: 10px;
  }
}
}

.lg-input {
  display: flex;
  flex-direction: column;
  width: 225px;
  .lg-input-box {
    padding: 10px;
    width: 200px;
    &-label {
      text-align: center;
      margin-bottom: 5px;
    }
  }
}
</style>
