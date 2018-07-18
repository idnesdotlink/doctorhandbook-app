<template>
  <pages>
    <md-toolbar class="md-primary">
      Home
    </md-toolbar>
    <img src="../../../assets/images/drhandbook_longbox_dark.svg">
    <md-button @click="getDB">test</md-button>
    <md-button @click="getDB2">test2</md-button>
    <md-button @click="advPage">ADV</md-button>
  </pages>
</template>

<script>
import { SaveOptions, getTableNames } from '@database'
import Pages from '@ui/pages'

export default {
  name: 'Home',
  components: {
    'pages': Pages
  },
  mounted () {
    // console.log(getTableNames())
  },
  methods: {
    advPage () {
      this.$router.push({ path: '/adv' })
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
