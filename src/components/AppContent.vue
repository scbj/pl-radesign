<template>
  <section class="app-content">
    <TransitionPush>
      <router-view />
    </TransitionPush>
  </section>
</template>

<script>
import TransitionPush from '@/components/TransitionPush.vue'

export default {
  components: {
    TransitionPush
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  /* Need to set overflow: hidden to prevent the scrollbar from
  appearing when transitions between pages. */
  overflow: hidden;
}
</style>
