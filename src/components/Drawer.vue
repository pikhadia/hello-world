<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">My Forecast</span>

      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true">Frequent Searches</md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Weather app</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <!-- <md-icon>info</md-icon> -->
          <span class="md-list-item-text">Info</span>
        </md-list-item>

        <md-list-item>
          <!-- <md-icon>place</md-icon> -->
          <span class="md-list-item-text">Countries</span>
        </md-list-item>

        <md-list-item>
          <!-- <md-icon>delete</md-icon> -->
          <span class="md-list-item-text">Contact Us</span>
        </md-list-item>

        <md-list-item>
          <!-- <md-icon>error</md-icon> -->
          <span class="md-list-item-text">Log out</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Frequent Searches</span>
        <md-tab id="tab-favorites" md-icon="favorite"></md-tab>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">France</span>
          <md-button class="md-icon-button md-list-action">
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">South Africa</span>
          <md-button class="md-icon-button md-list-action">
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Germany</span>
          <md-button class="md-icon-button md-list-action">
           
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
     Under Construction
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Temporary",
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
  }),
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}


.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
</style>
