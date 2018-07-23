<template>
  <app-container id="app">
    <transition
      name="slide-fade">
      <router-view/>
    </transition>
    <transition>
      <div v-if="showad">[content]</div>
    </transition>
    <md-drawer
      :md-swipeable="true"
      :md-active.sync="active">
      <page-nav/>
    </md-drawer>
  </app-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PageNav from '@ui/page-nav'
import AppContainer from '@ui/app-container'
export default {
  name: 'App',
  components: {
    'page-nav': PageNav,
    'app-container': AppContainer
  },
  data () {
    return {
      showad: false
    }
  },
  computed: {
    ...mapGetters([
      'navigationopen'
    ]),
    active: {
      get () {
        return this.navigationopen
      },
      set () {
        this.closeNav()
      }
    }
  },
  methods: {
    ...mapMutations({
      openNav: 'NAVIGATIONOPEN',
      closeNav: 'NAVIGATIONCLOSE'
    })
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
    transition: all .5s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .5s ease-in-out;
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
