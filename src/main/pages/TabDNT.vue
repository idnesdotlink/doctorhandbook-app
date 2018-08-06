<template>
  <tab-scroll>
    <md-list-item
      v-for="dt in psg"
      :key="dt">
      {{ dt }}
    </md-list-item>
  </tab-scroll>
</template>

<script>
import TabScroll from '@components/TabScroll'
export default {
  name: 'Be',
  components: {
    'tab-scroll': TabScroll
  },
  data () {
    return {
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
    }
  }
}
</script>
