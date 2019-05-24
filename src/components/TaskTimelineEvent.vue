<template>
  <transition appear name="fade">
    <div
      class="task-timeline-event"
      :class="{ highlighted }"
      :style="{ '--color': `${color.r}, ${color.g}, ${color.b}` }"
    >
      <span>About {{ task.dayCount }} days.</span>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      highlighted: false
    }
  },

  computed: {
    color () {
      return this.task.color
    }
  },

  mounted () {
    EventBus.$on('ui@task-highlighting:toggle', this.highlight)
  },

  beforeDestroy () {
    EventBus.$off('ui@task-highlighting:toggle', this.highlight)
  },

  methods: {
    highlight ({ task, highlighted }) {
      if (task.name === this.task.name) {
        this.highlighted = highlighted
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.task-timeline-event {
  font-size: 0.8rem;
  color: rgba(var(--color), 1);
  background-color: rgba(var(--color), 0.2);
  border: 1px solid rgba(var(--color), 0.5);
  border-left: 4px solid rgba(var(--color), 1);
  border-radius: 4px;
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow:
    0 2px 12px rgba(var(--color), 0),
    0 5px 12px -4px rgba(var(--color), 0);
  cursor: pointer;
  transition: all .6s cubic-bezier(.19, 1, .22, 1);

  &.highlighted,
  &:hover {
    background-color: rgba(var(--color), 0.3);
    box-shadow:
      0 2px 12px rgba(var(--color), 0.2),
      0 5px 12px -4px rgba(var(--color), 0.15);
  }
}

.fade-enter-active {
  transform-origin: 0% 50%;
  transition: all 1.2s cubic-bezier(.19, 1, .22, 1) .2s;
}

.fade-enter {
  opacity: 0;
  transform: scaleX(0.2) translateX(-5rem);
}

.fade-enter-to {
  opacity: 1;
  transform: scaleX(1) translateX(0);
}
</style>
