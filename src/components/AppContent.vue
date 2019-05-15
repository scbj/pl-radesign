<template>
  <section class="app-content">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity .1s ease-out;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
