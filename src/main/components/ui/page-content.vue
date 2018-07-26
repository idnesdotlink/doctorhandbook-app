<template>
  <div class="page-content">
    <md-toolbar class="md-primary md-dense">
      <md-button
        class="md-icon-button md-dense"
        @click="toggleNav">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
    <div class="ct">
      <slot/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          text: 'text 1'
        },
        {
          id: 2,
          text: 'text 2'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'navigationopen',
      'title'
    ])
  },
  mounted () {
  },
  methods: {
    toggleNav () {
      this.$store.dispatch('togglenavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 0;
    margin: 0;
  }
</style>

<style lang="scss">
  .md-bottom-bar > .md-ripple {
    justify-content: center;
  }
  .md-bottom-bar .md-bottom-bar-item {
  }
</style>
