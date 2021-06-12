<template>
  <header class="header">
    <NavBar/>
    <div class="header__content" v-if="withContent">
      <h1 class="header__content-header">We care about usage of urban space<br>and you can too <strong>care about it</strong></h1>
      <Button type="header">See how</Button>
    </div>
  </header>
</template>

<script>
import NavBar from './NavBar'
import Button from './Button'

export default {
  name: 'Header',
  props: {
    withContent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    NavBar,
    Button
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #48BF84;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    width: 90%;
    color: white;
    padding-bottom: 60px;
    &-header {
      font-size: 3rem;
      transition: all 0.15s ease-in-out;
      &:hover {
        transform: translate3d(10px, -10px, 10px);
      }
    }
  }
}
</style>
