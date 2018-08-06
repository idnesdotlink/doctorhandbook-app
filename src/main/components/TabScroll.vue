<template>
  <v-touch
    tag="div"
    class="tab-scroll"
    @touchstart.native="touchstart($event)"
    @touchend.native="touchend($event)"
    @scroll="scroll($event)">
    <div class="tab-scroll-content">
      <md-list>
        <slot/>
      </md-list>
    </div>
  </v-touch>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TabScroll',
  props: {
    scrollPosition: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      position: 0,
      ts: 0
    }
  },
  computed: {
    ...mapGetters([
      'toolbarheight'
    ])
  },
  methods: {
    ...mapMutations([
      'SETTOOLBARHEIGHT'
    ]),
    scroll () {
      let newPos = this.$el.scrollTop
      let oldPos = this.position
      let ev = (oldPos > newPos) ? 'up' : 'down'
      let delta = oldPos - newPos
      let absoluteDelta = Math.abs(delta)
      this.position = newPos
      this.SETTOOLBARHEIGHT(delta)
      this.$emit(ev, { delta, absoluteDelta })
    },
    touchstart ($event) {
      this.$data.ts = $event.changedTouches[0].screenX
    },
    touchend ($event) {
      let ts = this.$data.ts
      let te = $event.changedTouches[0].screenX
      console.log(ts - te)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }
</style>
