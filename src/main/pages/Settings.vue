<template>
  <div>
    <div @click="$router.go(-1)">Close</div>
    <div>
      percentage: {{ percentage }}
    </div>
    <md-button @click="createStorage">create storage</md-button>
    <md-button @click="clearStorage">clear storage</md-button>
    <md-button @click="getFile">get file</md-button>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      percentage: 0
    }
  },
  methods: {
    getFile () {
      /* this.$db.getTest() */
    },
    async createStorage () {
      /* let estimate
      try {
        estimate = await this.$db.showEstimatedQuota()
        let { usage, quota } = estimate
        this.$data.percentage = (usage / quota).toFixed(2)
      } catch (error) {
        console.log(error)
      } */
    },
    async clearStorage () {
      /* this.$db.clearDB() */
    }
  }
}
</script>
