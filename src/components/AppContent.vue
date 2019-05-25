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
@import '@/assets/styles/animation.scss';

.app-content {
  overflow: hidden;
}
</style>
