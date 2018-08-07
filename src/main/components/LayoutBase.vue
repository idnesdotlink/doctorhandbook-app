<template>
  <div class="layout-base">
    <div class="layout-base-inner">
      <div
        :style="`margin-top: ${margin}px`">
        <md-toolbar
          class="md-primary md-dense toolbar-top"
          md-elevation="0">
          Doctor Handbook
        </md-toolbar>
      </div>
      <div class="scroll-content">
        <transition>
          <router-view
            name="content"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutBase',
  data () {
    return {
      margin: 0
    }
  },
  computed: {
    ...mapGetters([
      'toolbarheight'
    ])
  },
  watch: {
    toolbarheight: function (val) {
      let oldVal = this.$data.margin
      let newVal = val
      let margin = oldVal + newVal
      if (margin < -48) {
        margin = -48
      }
      if (margin > 0) {
        margin = 0
      }
      this.$data.margin = margin
    }
  },
  methods: {
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
  .toolbar-top {
    bottom: 0;
  }
  .scroll-content {
    flex: 1;
  }
</style>
