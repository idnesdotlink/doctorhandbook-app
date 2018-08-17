<template>
  <layout-base id="App" />
</template>

<script>
import LayoutBase from '@components/LayoutBase'
export default {
  name: 'App',
  components: {
    'layout-base': LayoutBase
  }
}
</script>

<style lang="scss" scoped>
  #App {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
</style>
