<template>
  <div>
    <div @click="$router.go(-1)">Close</div>
    <md-button @click="createStorage">create storage</md-button>
    <md-button @click="clearStorage">clear storage</md-button>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    createStorage () {
    },
    clearStorage () {
      console.log('clear storage')
      window.indexedDB.deleteDatabase('com.doctorhandbook.app')
    }
  }
}
</script>
