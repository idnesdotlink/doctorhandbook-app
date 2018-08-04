<template>
  <page class="page-style">
    <md-button @click="back">test</md-button>
  </page>
</template>

<script>
import Pages from '@components/pages'
export default {
  name: 'Tour',
  components: {
    page: Pages
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-style {
    background-color: blue !important;
  }
</style>
