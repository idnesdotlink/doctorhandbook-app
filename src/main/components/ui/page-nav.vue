<template>
  <div>
    <img src="@assets/images/drhandbook_longbox_dark.svg">
    <md-button @click="closeNav">close</md-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'PageNav',
  computed: {
    ...mapGetters([
      'navigationopen'
    ])
  },
  methods: {
    ...mapMutations({
      openNav: 'NAVIGATIONOPEN',
      closeNav: 'NAVIGATIONCLOSE'
    })
  }
}
</script>
