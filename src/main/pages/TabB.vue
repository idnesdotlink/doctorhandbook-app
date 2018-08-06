<template>
  <div
    class="tc"
    @scroll="scroll($event)">
    <div class="big">
      <md-list>
        <md-list-item
          v-for="dt in psg"
          :key="dt">
          {{ dt }}
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Be',
  data () {
    return {
      top: 0,
      psg: []
    }
  },
  mounted () {
    this.psg = this.create(50)
  },
  methods: {
    create (total) {
      let arr = []
      let i
      for (i = 0; i <= total; i++) {
        arr.push(i)
      }
      return arr
    },
    scroll (e) {
      console.log(this.$el.scrollTop)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tc {
    overflow-y: scroll;
    height: 100%;
  }
</style>
