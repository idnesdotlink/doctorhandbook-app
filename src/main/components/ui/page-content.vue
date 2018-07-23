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
        id="bottom-bar-item-pages"
        md-label="Desease And Treatment"
        md-icon="pages"/>
      <md-bottom-bar-item
        id="bottom-bar-item-posts"
        md-label="Posts"
        md-icon="menu"/>
      <md-bottom-bar-item
        id="bottom-bar-item-favorites"
        md-label="Favorites"
        md-icon="favorite"/>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
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
