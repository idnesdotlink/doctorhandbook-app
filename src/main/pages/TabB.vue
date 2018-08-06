<template>
  <v-touch
    tag="div"
    class="tc"
    @panup="swipeup($event)"
    @pandown="swipedown($event)">
    <div class="big">
      <div
        v-for="dt in psg"
        :key="dt">
        {{ dt }}
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'Be',
  data () {
    return {
      top: 0,
      psg: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ]
    }
  },
  methods: {
    swipeup (e) {
      if (this.$data.top === 0) return
      this.$data.top--
      this.$el.scrollTop = this.$data.top
    },
    swipedown (e) {
      if (this.$data.top === 500) return
      this.$data.top++
      this.$el.scrollTop = this.$data.top
    }
  }
}
</script>

<style lang="scss" scoped>
  .tc {
    overflow: scroll;
    height: 100%;
  }
  .big {
    height: 500px;
  }
</style>
