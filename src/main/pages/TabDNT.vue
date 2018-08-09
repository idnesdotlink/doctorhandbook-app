<template>
  <tab-content
    :table="table">
    <p>hello</p>
  </tab-content>
</template>

<script>
import TabContent from '@components/TabContent'
export default {
  name: 'TabDNT',
  components: {
    'tab-content': TabContent
  },
  data () {
    return {
      table: 'drugs'
    }
  }
}
</script>
