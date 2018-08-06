<template>
  <div
    tag="div"
    class="layout-base">
    <div>
      <div
        :style="`margin-top: ${margin}px`">
        <md-toolbar
          class="md-primary md-dense tz"
          md-elevation="0">
          Doctor Handbook
        </md-toolbar>
      </div>
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
  .tz {
    bottom: 0;
  }
  .yee {
    flex: 1;
  }
</style>
