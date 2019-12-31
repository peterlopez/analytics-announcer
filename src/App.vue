<template>
  <div id='app'>
    <welcome></welcome>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'welcome': Welcome
  }
}
</script>

<style lang='scss'>
#app {
  min-width: 300px;
}
</style>
