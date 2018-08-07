<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TabScroll'
}
</script>

<style lang="scss" scoped>
  .tab-scroll-2 {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }
</style>
