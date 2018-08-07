<template>
  <virtual-scroller
    :buffer="20"
    :items="items"
    :pool-size="250"
    item-height="40"
    content-tag="test-tab-scroll">
    <template
      slot-scope="props"
      @scroll="sc">
      <li
        :key="props.itemKey"
        :style="`height: 40px`">
        {{ props.item.content }}
      </li>
    </template>
  </virtual-scroller>
</template>

<script>
import Vue from 'vue'
import TabScroll from '@components/TabScroll2'
Vue.component('test-tab-scroll', TabScroll)
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
    this.items = this.create(500)
  },
  methods: {
    sc () {
      console.log('sc')
    },
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
