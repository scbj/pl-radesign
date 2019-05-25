<template>
  <div id="app">
    <AppContent />
    <AppHeader />
    <AppSideBar>
      <h1>Radesign</h1>
    </AppSideBar>
  </div>
</template>

<script>
import AppContent from '@/components/AppContent.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSideBar from '@/components/AppSideBar.vue'

export default {
  components: {
    AppContent,
    AppHeader,
    AppSideBar
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';

#app {
  color: var(--color-light-5);
  background: var(--color-light-2);
  display: grid;
  grid-template-columns: 18.6rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "side-bar header"
    "side-bar content";
  min-height: 100vh;
}

.app-content { grid-area: content }
.app-header { grid-area: header }
.app-side-bar { grid-area: side-bar }

.app-header,
.app-side-bar {
  position: sticky;
  top: 0;
}

.app-side-bar {
  height: 100vh;

  h1 {
    margin: 1.5rem;
  }
}
</style>
