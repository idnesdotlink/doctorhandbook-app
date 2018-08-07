<template>
  <tab-scroll
    :scroll-position="scrollPosition"
    @content-scroll="scrollPosition = $event">
    <md-list-item
      v-for="item in items"
      :key="item.id">
      {{ item.content }}
    </md-list-item>
  </tab-scroll>
</template>

<script>
import TabScroll from '@components/TabScroll'
export default {
  name: 'TabDND',
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
          content: `${i}-dnd`
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
