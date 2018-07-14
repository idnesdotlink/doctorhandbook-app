<template>
  <div>
    <p>Home</p>
    <md-button @click='getDB'>test</md-button>
  </div>
</template>

<script>
import Dexie from 'dexie'
// const db = new Dexie('MyDatabase')

export default {
  name: 'Home',
  methods: {
    async getDB () {
      var db = new Dexie('MyDatabase')
      db.version(1).stores({drugs: 'id, title'})
      db.open().catch (function (err) {
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
        )
    }
  }
}
</script>
