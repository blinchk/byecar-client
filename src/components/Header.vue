<template>
  <header class="header">
    <NavBar/>
    <div class="header__content">
      <h1 class="header__content-header">We care about using of urban space<br>and you can too <strong>care about it</strong></h1>
      <Button>See how</Button>
    </div>
  </header>
</template>

<script>
import NavBar from './NavBar'
import Button from './Button'

export default {
  name: 'Header',
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
    padding-bottom: 20px;
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
