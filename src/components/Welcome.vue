<template>
<div>
  <md-empty-state 
    md-icon='./src/assets/google-analytics-logo.svg'
    md-label='Get Started'
    md-description='Click the button below to sign in to your Google Analytics account to get started.'>

    <md-button 
      id='js_google-signin'
      class='md-primary md-raised'
      v-on:click='signin'>
        Login with Google
    </md-button>

    <md-progress-spinner
      id='js_spinner'
      :md-diameter='30'
      :md-stroke='3'
      md-mode='indeterminate'
      class='hidden'>
    </md-progress-spinner>
  </md-empty-state>
</div>
</template>

<script>
export default {
  methods: {
    signin: function(event) {
      // Disable button and show progress spinner
      document.querySelector('#js_google-signin').disabled = true;
      document.querySelector('#js_spinner').classList.remove('hidden');
    }
  }
}
</script>

<style lang='scss' scoped>
.hidden {
  visibility: hidden;
}
.md-progress-spinner {
  margin-top: 30px;
}
.md-button,
.md-progress-spinner {
  transition: 0.2s all ease;
}
</style>
<style lang='scss'>
// Would not work inside scoped SCSS
.md-empty-state .md-icon #Analytics {
  padding: 5%;
}
</style>
