<template>
  <virtual-scroller
    :items="items"
    item-height="40"
    content-tag="md-list">
    <template slot-scope="props">
      <md-list-item
        :key="props.item.key">
        {{ props.item.content }}
      </md-list-item>
    </template>
  </virtual-scroller>
</template>

<script>
import Vue from 'vue'
import TabScroll from '@components/TabScroll2'
Vue.component('tab-scroll', TabScroll)
export default {
  name: 'TabCarreer',
  components: {
    'tab-scroll': TabScroll
  },
  data () {
    return {
      items: [],
      scrollPosition: 0
    }
  },
  async mounted () {
    this.items = this.create(20)
  },
  methods: {
    create (total) {
      let arr = []
      let i
      for (i = 1; i <= total; i++) {
        arr.push({
          id: i,
          content: `${i}-career`
        })
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list-item {
    border-bottom: 1px solid #eeeeee;
  }
</style>
