<template>
  <div class="app-container">
    <slot/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppContainer',
  methods: {
    ...mapMutations({
      openNav: 'NAVIGATIONOPEN',
      closeNav: 'NAVIGATIONCLOSE'
    }),
    swipeRight (e) {
      // console.log(e)
    },
    swipeLeft (e) {
      // console.log(e)
    },
    panright (e) {
      // console.log(this)
      // console.log(e.center.x)
    },
    panleft (e) {
      // console.log(e)
    },
    touch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
