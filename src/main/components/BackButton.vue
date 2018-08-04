<template>
  <md-button
    class="md-icon-button"
    @click="$router.go(-1)">
    <md-icon>menu</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>

