<template>
  <div class="task-timeline-event" :style="{ '--color': `${color.r}, ${color.g}, ${color.b}` }">
    <span>About {{ duration }} days.</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Object,
      required: true
    },
    duration: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.task-timeline-event {
  opacity: 0;
  font-size: 0.8rem;
  color: rgba(var(--color), 1);
  background-color: rgba(var(--color), 0.15);
  border: 1px solid rgba(var(--color), 0.5);
  border-left: 4px solid rgba(var(--color), 1);
  border-radius: 4px;
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  transform-origin: 0% 50%;
  animation: fade-in 1.2s cubic-bezier(.19, 1, .22, 1) .3s forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scaleX(0.2) translateX(-5rem);
  }
  to {
    opacity: 1;
    transform: scaleX(1) translateX(0);
  }
}
</style>
