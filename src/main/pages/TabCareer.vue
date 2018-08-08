<template>
  <virtual-scroller
    :buffer="480"
    :items="items"
    :pool-size="240"
    item-height="48"
    content-tag="test-tab-scroll"
    emit-update
    @update="(startIndex, endIndex) => upd">
    <template
      slot-scope="props"
      @scroll="sc">
      <md-list-item
        :key="props.itemKey"
        :style="`height: 48px`">
        {{ props.item.content }}
      </md-list-item>
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
    this.items = this.create(5000)
  },
  methods: {
    upd (s, e) {
      console.log({
        s, e
      })
    },
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
