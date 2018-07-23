<template>
  <pages>
    <page-content>
      <md-toolbar
        md-elevation="0"
        class="md-primary md-dense toolbar-40">
        <md-button
          class="md-icon-button"
          @click="toggleNav">
          <md-icon>menu</md-icon>
        </md-button>
      </md-toolbar>
      <div class="ct">
        <md-button @click="getDB">test</md-button>
        <md-button @click="getDB2">test2</md-button>
        <md-button @click="advPage">ADV</md-button>
        <div>{{ navigationopen }}</div>
      </div>
    </page-content>
  </pages>
</template>

<script>
import { SaveOptions, getTableNames } from '@database'
import Pages from '@ui/pages'
import PageContent from '@ui/page-content'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    'pages': Pages,
    'page-content': PageContent
  },
  computed: {
    ...mapGetters([
      'navigationopen',
      'title'
    ])
  },
  mounted () {
    // console.log(getTableNames())
  },
  methods: {
    toggleNav () {
      this.$store.dispatch('togglenavigation')
    },
    advPage () {
      this.$router.push({ path: '/advertisement' })
    },
    async getDB () {
      console.log(getTableNames())
      /* var db = new Dexie('MyDatabase')
      db.version(1).stores({drugs: 'id, title'})
      db.open().catch(function (err) {
        console.error('Failed to open db: ' + (err.stack || err))
      })
      db.drugs
        .where('id')
        .equals('0051')
        .toArray()
        .then(
          function (arr) {
            console.log(arr)
          }
        ) */
    },
    async getDB2 () {
      try {
        await SaveOptions({})
      } catch (e) {
        console.log(e)
      }
    }
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
