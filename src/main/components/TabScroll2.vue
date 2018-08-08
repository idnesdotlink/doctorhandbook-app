<template>
  <md-list
    class="hello"
    @scroll="psg">
    <slot/>
  </md-list>
</template>

<script>
export default {
  name: 'TabScroll',
  methods: {
    psg () {
      console.log('psg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-scroll-2 {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }
</style>
