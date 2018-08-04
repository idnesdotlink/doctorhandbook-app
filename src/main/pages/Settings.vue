<template>
  <pages>
    <page-content>
      [Settings]
    </page-content>
  </pages>
</template>

<script>
import Pages from '@components/pages'
import PageContent from '@components/page-content'
export default {
  name: 'Settings',
  components: {
    'pages': Pages,
    'page-content': PageContent
  }
}
</script>
