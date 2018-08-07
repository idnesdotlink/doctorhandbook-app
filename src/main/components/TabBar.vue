<template>
  <div class="tab-bar">
    <div class="settings-icon">
      <md-button
        class="md-icon-button"
        @click="$router.push({ name: 'settings' })">
        <md-icon>settings</md-icon>
      </md-button>
    </div>
    <div class="tab-bar-tabs">
      <md-tabs
        :md-active-tab="MdActive"
        class="mtt"
        @md-changed="change">
        <md-tab
          v-for="tab in tabs"
          :key="tab.id"
          :id="tab.id"
          :md-label="tab.label"/>
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
      MdActive: null,
      tabs: [
        {
          id: 'tab-dnd',
          label: 'D&D',
          scroll: 0
        },
        {
          id: 'tab-dnt',
          label: 'D&T',
          scroll: 0
        },
        {
          id: 'tab-career',
          label: 'Career',
          scroll: 0
        }
      ]
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
.tab-bar {
  display: flex;
  margin-bottom: 5px;
  box-shadow: 0px 0px 5px 0.1px #888888;
}
.settings-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tab-bar-tabs {

}
.mtt {

}
</style>
