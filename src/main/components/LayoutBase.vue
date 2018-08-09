<template>
  <div class="layout-base">
    <div class="layout-base-inner">
      <div
        :style="style">
        <md-toolbar
          class="md-primary md-dense toolbar-top"
          md-elevation="0">
          Doctor Handbook
          <div class="md-toolbar-section-end">
            <md-button
              class="md-icon-button"
              @click="clickSearch">
              <md-icon>search</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </div>
      <div class="scroll-content">
        <transition
          :name="pageanimation">
          <router-view
            name="content"
            class="router-content"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from 'lodash'
export default {
  name: 'LayoutBase',
  data () {
    return {
      margin: 0
    }
  },
  computed: {
    ...mapGetters([
      'pageanimation',
      'toolbarheight'
    ]),
    style: {
      get: function () {
        let style = {
          'margin-top': `${this.margin}px`
        }
        if (this.changing) {
          style.transition = 'margin .5s ease'
        } else {
          style.transition = false
        }
        return style
      }
    }
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
      this.changeFunc()
    }
  },
  methods: {
    clickSearch () {
      console.log('search')
    },
    deactivate () {
      console.log('deactivate')
    },
    changeFunc: debounce(function () {
      if (this.margin < -24) {
        this.changing = true
        this.$data.margin = -48
      } else if (this.margin > -24) {
        this.changing = true
        this.$data.margin = 0
      } else {
        this.changing = false
      }
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
  .layout-base-inner {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .toolbar-top {
    bottom: 0;
  }
  .scroll-content {
    flex: 1;
    position: relative;
  }
  .router-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .slide-fade-up-enter-active {
    transition: all 1s ease-in-out;
  }
  .slide-fade-up-leave-active {
    transition: all 1s ease-in-out;
  }
  .slide-fade-up-enter {
    transform: translateY(100%);
  }
  .slide-fade-up-leave-to {
    transform: translateY(-100%);
  }
</style>
