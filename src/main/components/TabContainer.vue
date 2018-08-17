<template>
  <div class="tab-container">
    <router-view name="tab-tab" />
    <div class="tab-content">
      <transition :name="tabanimation">
        <router-view
          name="tab-content"
          class="tab-content-scroll"
          @scroll.native="onScroll($event)"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      scrollPosition: 0
    }
  },
  computed: {
    ...mapGetters([
      'tabanimation'
    ])
  },
  methods: {
    ...mapMutations([
      'SETTOOLBARHEIGHT'
    ]),
    change (id) {
      this.$router.push({
        name: id
      })
    },
    pl () {
      console.log('pl')
    },
    onScroll ($event) {
      let newPos = $event.target.scrollTop
      let oldPos = this.scrollPosition
      // let ev = (oldPos > newPos) ? 'up' : 'down'
      this.scrollPosition = newPos
      this.SETTOOLBARHEIGHT(oldPos - newPos)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .tab-content {
    flex: 1;
    position: relative;
  }
  .tab-content-scroll {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .slide-left-enter-active {
    transition: all .5s ease;
  }
  .slide-left-leave-active {
    transition: all .5s ease;
  }
  .slide-left-enter {
    transform: translateX(-100%);
  }
  .slide-left-leave-to {
    transform: translateX(100%);
  }

  .slide-right-enter-active {
    transition: all .5s ease;
  }
  .slide-right-leave-active {
    transition: all .5s ease;
  }
  .slide-right-enter {
    transform: translateX(100%);
  }
  .slide-right-leave-to {
    transform: translateX(-100%);
  }
</style>
