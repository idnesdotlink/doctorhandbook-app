<template>
  <div id="app">
    <transition
      name="slide-fade">
      <router-view/>
    </transition>
    <transition>
      <div v-if="showad">[content]</div>
    </transition>
    <md-drawer :md-active.sync="shownav">
      <md-button>close</md-button>
    </md-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      showad: false,
      shownav: false
    }
  },
  computed: {
    ...mapGetters([
      'navigationopen',
      'title'
    ])
  },
  watch: {
    navigationopen (value) {
      this.$data.shownav = value
    },
    shownav (value) {
      console.log(value)
      this.$store.dispatch('setnavigationopen')
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
    transition: all 1.5s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all 1.5s ease-in-out;
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
