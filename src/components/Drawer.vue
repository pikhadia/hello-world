<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Global Forecast</span>

      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true">Frequent Countries</md-button>
      </div>
    </md-toolbar>

    <md-drawer :v-model="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Weather App</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>About</md-icon>
          <span class="md-list-item-text">About</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Services</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Countries</span>
        </md-list-item>

        <md-list-item>
          <md-icon>Contact us</md-icon>
          <span class="material-icons">
          contact_page</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-drawer class="md-right" :v-model="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Frequent Countries</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">South Africa</span>

          <md-button class="md-icon-button md-list-action">
               //todo: find icons
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">France</span>

          <md-button class="md-icon-button md-list-action">
            //todo: find icons
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">USA</span>

          <md-button class="md-icon-button md-list-action">
            //todo: find icons
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      Under Construction.
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>