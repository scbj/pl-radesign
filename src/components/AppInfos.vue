<template>
  <div class="app-infos" @click="close" />
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
  background: rgba(0,0,0, .5);
}
</style>
