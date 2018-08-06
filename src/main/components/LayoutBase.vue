<template>
  <div
    tag="div"
    class="layout-base">
    <div>
      <md-toolbar
        class="md-primary md-dense"
        md-elevation="0">
        [toolbar]
      </md-toolbar>
      <div class="yee">
        <transition>
          <router-view
            name="content"/>
        </transition>
      </div>
    </div>
  </div>
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
