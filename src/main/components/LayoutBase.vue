<template>
  <v-touch
    tag="div"
    class="layout-base">
    <div :style="`top: ${top}px; padding-top: ${top}px`">
      <md-toolbar
        class="md-primary md-dense"
        md-elevation="0">
        [toolbar]
      </md-toolbar>
      <div :style="`position: absolute; top: ${top}px; z-index:100; background: blue;`">Hello</div>
      <div class="yee">
        <transition>
          <router-view
            name="content"/>
        </transition>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'LayoutBase',
  data () {
    return {
      top: 0
    }
  },
  methods: {
    swipeup (e) {
      if (this.$data.top === 0) return
      this.$data.top--
    },
    swipedown (e) {
      if (this.$data.top === 48) return
      this.$data.top++
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-base {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
  }
  .layout-base > div {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .yee {
    flex: 1;
  }
</style>
