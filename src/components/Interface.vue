<template>
  <div class='page-container md-layout-column'>
    <md-toolbar class='md-primary'>
      <md-button class='md-icon-button' @click='showSidepanel = true'>
        <md-icon>settings</md-icon>
      </md-button>
      <span class='md-title'>Analytics Announcer</span>

      <div class='md-toolbar-section-end'>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync='showSidepanel' md-swipeable>
      <md-toolbar class='md-transparent' md-elevation='0'>
        <span class='md-title'>Settings</span>
      </md-toolbar>
      <md-button id='js_disconnect' class='md-accent' :md-ripple='false' @click='showConfirmDisconnect()'>Disconnect Google Account</md-button>
      <div class='confirm-disconnect' v-if='confirmDisconnect'>
        <p class='confirm-disconnect_text md-body-2'>Are you sure?</p>
        <md-button :md-ripple='false' @click='hideConfirmDisconnect(false)'>No</md-button>
        <md-button class='md-primary' @click='hideConfirmDisconnect(true)'>Yes</md-button>
      </div>
    </md-drawer>

    <md-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'Interface',
  data: () => ({
    showSidepanel: false,
    confirmDisconnect: false
  }),
  methods: {
    showConfirmDisconnect: function(event) {
      // set button to disabled and show confirm buttons
      document.querySelector('#js_disconnect').disabled = true;
      this.confirmDisconnect = true;
    },
    hideConfirmDisconnect: function(confirmYes) {
      // set button to disabled and show confirm buttons
      document.querySelector('#js_disconnect').disabled = false;
      this.confirmDisconnect = false;

      if (confirmYes) {
        // TODO Remove OAuth token from local storage
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.page-container {
  height: 100%;
  min-width: 300px;
  overflow: hidden;
  position: relative;
}
.md-content {
  padding: 30px;
  height: 100%;
}
.confirm-disconnect {
  padding-left: 30px;
}
.confirm-disconnect_text {
  margin: 5px 0;
}
</style>
