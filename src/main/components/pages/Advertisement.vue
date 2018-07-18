<template>
  <page class="page-style">
    <md-button @click="$router.go(-1)">test</md-button>
  </page>
</template>

<script>
import Pages from '@ui/pages'
export default {
  name: 'Advertisement',
  components: {
    page: Pages
  }
}
</script>

<style lang="scss" scoped>
  .page-style {
    background-color: blue !important;
  }
</style>
