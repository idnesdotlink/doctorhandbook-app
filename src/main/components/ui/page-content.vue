<template>
  <div
    v-bar
    class="page-content"
    @drag="ds">
    <slot/>
    <md-bottom-bar
      class="botbar"
      md-type="shift">
      <md-bottom-bar-item
        v-for="item in items"
        :key="item.id"
        :label="item.text">
        <span>
          {{ item.text }}
        </span>
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
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
  methods: {
    ds () {
      console.log('ds')
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
