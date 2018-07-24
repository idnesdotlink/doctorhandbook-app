<template>
  <div>
    <img src="@assets/images/drhandbook_longbox_dark.svg">
    <md-list>
      <md-list-item :to="{ name: 'home' }">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Home</span>
      </md-list-item>
      <md-list-item :to="{ name: 'home' }">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Drug And Dosage</span>
      </md-list-item>
      <md-list-item :to="{ name: 'home' }">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Desease And Treatment</span>
      </md-list-item>
      <md-list-item :to="{ name: 'advertisement' }">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Semua Artikel</span>
      </md-list-item>
    </md-list>
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
