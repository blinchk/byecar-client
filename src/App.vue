<template>
  <div id="app">
    <Header :with-content="this.$route.path === '/'"/>
    <main class="current-view">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    const locale = sessionStorage.getItem('byeCarLocale')
    if (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
}

.current-view {
  margin: 0 5%;
}
</style>
