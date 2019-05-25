<template>
  <transition
    name="transition"
    mode="out-in"
    enter-active-class="push-in-enter-active"
    enter-leave-class="ush-in-leave-active"
    @before-enter="setCustomProperties"
    @before-leave="setCustomProperties"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  props: {
    x: {
      type: String,
      default: '2em'
    },
    y: {
      type: String,
      default: '.5em'
    },
    duration: {
      type: String,
      default: '300ms'
    }
  },

  methods: {
    setCustomProperties (el) {
      el.style.setProperty('--translate-x', this.x)
      el.style.setProperty('--translate-y', this.y)
      el.style.setProperty('--transition-duration', this.duration)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/animation.scss';

.push-in-enter-active,
.push-in-leave-active {
  animation: push-in var(--transition-duration) $easing;
}

.push-in-leave-active {
  animation-direction: reverse;
}

@keyframes push-in {
  from {
    opacity: 0;
    transform: translateX(var(--translate-x)) translateY(var(--translate-y));
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
</style>
