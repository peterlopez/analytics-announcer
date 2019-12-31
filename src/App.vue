<template>
  <main id='app'>
    <interface v-if='isAuthenticated'></interface>
    <welcome v-else></welcome>
  </main>
</template>

<script>
import Welcome from './components/Welcome.vue';
import Interface from './components/Interface.vue';

export default {
  name: 'app',
  data: () => ({
  }),
  components: {
    'welcome': Welcome,
    'interface': Interface
  },
  computed: {
    isAuthenticated: function() {
      // TODO Read OAuth token from local storage, return true if found
      return true;
    }
  }
}
</script>

<style lang='scss'>
html, body {
  height: 100%;
}
#app {
  min-width: 300px;
  height: 100%;
}
.hidden {
  visibility: hidden;
}
</style>
