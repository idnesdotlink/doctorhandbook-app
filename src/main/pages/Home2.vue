<template>
  <pages>
    <page-content>
      [Home]
    </page-content>
  </pages>
</template>

<script>
import Pages from '@components/pages'
import PageContent from '@components/page-content'
export default {
  name: 'Home',
  components: {
    'pages': Pages,
    'page-content': PageContent
  }
}
</script>

<style lang="scss" scoped>
.md-toolbar.md-dense.toolbar-40 {
  min-height: 40px;
  max-height: 40px;
  width: 100vw;
}
.ct {
  flex: 1;
}
</style>
