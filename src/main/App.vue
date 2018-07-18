<template>
  <div id="app">
    <transition
      name="slide-fade">
      <router-view/>
    </transition>
    <transition>
      <div v-if="showAd">[content]</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showAd: false
    }
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .slide-fade-enter-active {
    transition: all 3s ease;
  }
  .slide-fade-leave-active {
    transition: all 3s ease;
  }
  .slide-fade-enter {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
