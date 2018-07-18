<template>
  <md-content class="pages">
    <slot/>
  </md-content>
</template>

<script>
export default {
  name: 'Pages'
}
</script>

<style lang="scss" scoped>
  .pages {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
