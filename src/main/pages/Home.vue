<template>
  <div class="home">
    <router-view name="tab-tab"/>
    <div class="tab-content">
      <transition :name="tabanimation">
        <router-view
          name="tab-content"
          class="tab-content-scroll"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'tabanimation'
    ])
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
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .tab-content {
    flex: 1;
    position: relative;
  }
  .tab-content-scroll {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .slide-fade-left-enter-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-left-leave-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-left-enter {
    transform: translateX(-100%);
  }
  .slide-fade-left-leave-to {
    transform: translateX(100%);
  }

    .slide-fade-right-enter-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-right-leave-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-right-enter {
    transform: translateX(100%);
  }
  .slide-fade-right-leave-to {
    transform: translateX(-100%);
  }
</style>
