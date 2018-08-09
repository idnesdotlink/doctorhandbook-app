<template>
  <virtual-scroller
    :buffer="480"
    :items="items"
    :pool-size="240"
    item-height="48"
    content-tag="md-list">
    <template
      slot-scope="props">
      <md-list-item
        :key="props.itemKey"
        :style="`height: 48px`"
        @click="click(props.item.title)">
        {{ props.item.title }}
      </md-list-item>
    </template>
  </virtual-scroller>
</template>

<script>
export default {
  name: 'TabCarreer',
  props: {
    table: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    try {
      let db = await this.$_db.open()
      this.items = await db[this.table].toArray()
      db.close()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    click (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list-item {
    border-bottom: 1px solid #eeeeee;
  }
</style>
