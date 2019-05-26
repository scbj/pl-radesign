<template>
  <div class="app-infos" @click="close">
    <transition name="fade" appear>
      <div class="background" />
    </transition>
  </div>
</template>

<script>
import disableScrolling from '@/mixins/disable-scrolling.js'
import { EventBus } from '@/reactivity/event-bus.js'

export default {
  mixins: [ disableScrolling ],

  methods: {
    close () {
      EventBus.$emit('ui@infos:close')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-infos {
  display: grid;
  position: relative;
}

.background {
  background: rgba(white, .8);
  grid-area: 1 / 1 / -1 / -1;
  backdrop-filter: blur(25px);
}

.fade-enter-active {
  transition:
    background .3s ease-out,
    backdrop-filter .2s ease-out .2s;
}

.fade-enter {
  background: rgba(white, 0);
  backdrop-filter: blur(0);
}
</style>
