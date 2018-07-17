<template>
  <pages>
    <p>Home</p>
    <md-button @click="getDB">test</md-button>
    <md-button @click="getDB2">test2</md-button>
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
    console.log(getTableNames())
  },
  methods: {
    async getDB () {
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
