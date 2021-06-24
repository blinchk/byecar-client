<template>
  <header class="header">
    <NavBar/>
    <div class="header__content" v-if="withContent">
      <h1 class="header__content-header" v-html="$t('mainPage.headerTitle')"/>
      <Button type="header" v-html="$t('mainPage.seeHow')"></Button>
    </div>
  </header>
</template>

<script>
import NavBar from './NavBar'
import Button from './general/Button'

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
