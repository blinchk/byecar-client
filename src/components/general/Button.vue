<template>
  <a href="#" :class="buttonClass" @click="$emit('click')">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonClass () {
      switch (this.type) {
        case 'header':
          return 'btn-header'
        case 'report-form':
          return 'btn-report-form'
        default:
          return 'btn'
      }
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
}

.btn {
  border: solid 1px #48BF84;
  background: #48BF84;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #48BF84;
    background: white;
    border: solid 1px #48BF84;
  }
}

.btn-report-form {
  border: solid 1px #48BF84;
  background: #48BF84;
  padding: 10px 150px;
  margin-bottom: 5px;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #48BF84;
    background: white;
    border: solid 1px #48BF84;
  }
}

.btn-header {
  border: solid 1px white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #48BF84;
    background: white;
    border: solid 1px #48BF84;
  }
}
</style>
