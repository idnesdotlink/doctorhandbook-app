<template>
  <div class="t">
    <md-button
      class="md-icon-button"
      @click="$router.push({ name: 'settings' })">
      <md-icon>settings</md-icon>
    </md-button>
    <div class="mt">
      <md-tabs
        :md-active-tab="MdActive"
        class="mtt"
        @md-changed="change">
        <md-tab
          id="tab-dnd"
          md-label="D&amp;D"/>
        <md-tab
          id="tab-dnt"
          md-label="D&amp;T"/>
        <md-tab
          id="tab-carreer"
          md-label="Carreer"/>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RTab',
  data () {
    return {
      MdActive: null
    }
  },
  computed: {
    ...mapGetters([
      'tabanimation'
    ])
  },
  mounted () {
    // this.$data.MdActive = this.$route.name
    this.$set(this.$data, 'MdActive', this.$route.name)
  },
  methods: {
    change (id) {
      this.$router.push({
        name: id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.t {
  display: flex;
}
.mt {
  flex: 1;
  // overflow: scroll;
}
.mtt {

}
</style>
