<template>
  <div
    class="tc">
    <div class="big">
      <v-touch
        tag="md-list"
        @scroll="up">
        <md-list-item
          v-for="dt in psg"
          :key="dt">
          {{ dt }}
        </md-list-item>
      </v-touch>
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
    up () {
      console.log('ok')
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
