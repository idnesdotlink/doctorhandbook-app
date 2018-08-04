<template>
  <page class="page-style">
    <md-button @click="back">test</md-button>
    <md-button>clik</md-button>
  </page>
</template>

<script>
import { Pages } from '@components'
export default {
  name: 'Advertisement',
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
