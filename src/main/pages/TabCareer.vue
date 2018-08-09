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
        :style="`height: 48px`">
        {{ props.item.id }} {{ props.item.title }}
      </md-list-item>
    </template>
  </virtual-scroller>
</template>

<script>
export default {
  name: 'TabCarreer',
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    try {
      let db = await this.$_db.open()
      this.items = await db.drugs.toArray()
      db.close()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list-item {
    border-bottom: 1px solid #eeeeee;
  }
</style>
