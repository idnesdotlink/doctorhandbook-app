<template>
  <div
    class="tab-scroll"
    @touchstart.native="touchstart($event)"
    @touchend.native="touchend($event)"
    @scroll="scroll($event)">
    <div class="tab-scroll-content">
      <md-list>
        <slot/>
      </md-list>
    </div>
  </div>
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
      ts: 0,
      itemHeight: 0
    }
  },
  computed: {
    ...mapGetters([
      'toolbarheight'
    ])
  },
  watch: {
    scrollPosition: function (v) {
      this.position = v
    }
  },
  async mounted () {
    this.itemHeight = await this.getItemHeight()
  },
  methods: {
    ...mapMutations([
      'SETTOOLBARHEIGHT'
    ]),
    async getItemHeight () {
      await this.$nextTick()
      let firstItem = this.$children[0].$children[0].$el
      return firstItem.clientHeight
    },
    scroll () {
      let newPos = this.$el.scrollTop
      let oldPos = this.scrollPosition
      let ev = (oldPos > newPos) ? 'up' : 'down'
      let delta = oldPos - newPos
      let absoluteDelta = Math.abs(delta)
      this.position = newPos
      this.SETTOOLBARHEIGHT(delta)
      this.$emit(ev, { delta, absoluteDelta })
      this.$emit('content-scroll', this.$el.scrollTop)
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
