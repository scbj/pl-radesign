<template>
  <section class="app-content">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/animation.scss';

.app-content {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .4s $easing;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateX(0px);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}
</style>
