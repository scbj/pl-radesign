<template>
  <div id="app" :class="{ desaturate }">
    <AppContent />
    <AppHeader />
    <AppSideBar>
      <h1 @click="showInformations = true">
        Radesign
      </h1>
    </AppSideBar>
    <AppInfos v-if="showInformations" />
  </div>
</template>

<script>
import AppSideBar from '@/components/AppSideBar.vue'
import AppHeader from '@/components/AppHeader.vue'

import { EventBus } from '@/reactivity/event-bus.js'

// Async components
const AppContent = () => import('@/components/AppContent.vue')
const AppInfos = () => import('@/components/AppInfos.vue')

export default {
  components: {
    AppContent,
    AppHeader,
    AppInfos,
    AppSideBar
  },

  data () {
    return {
      desaturate: false,
      showInformations: false
    }
  },

  mounted () {
    EventBus.$on('ui@theme:change', theme => {
      this.desaturate = theme === 'moon'
    })
    EventBus.$on('ui@infos:close', () => {
      this.showInformations = false
    })
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
  transition: filter 200ms ease-out;

  &.desaturate {
    filter: saturate(0);
    transition-duration: 400ms;
  }
}

.app-content { grid-area: content }
.app-header { grid-area: header }
.app-side-bar { grid-area: side-bar }
.app-infos {
  grid-area: 1 / 1 / -1 / -1;
  z-index: 100;
}

.app-header,
.app-side-bar {
  position: sticky;
  top: 0;
}

.app-side-bar {
  height: 100vh;

  h1 {
    margin: 1.5rem;
    cursor: pointer;
  }
}
</style>
