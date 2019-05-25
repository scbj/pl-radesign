<template>
  <transition appear name="fade">
    <div
      class="task-timeline-event"
      :class="{ highlighted }"
      :style="color"
    >
      <span class="label">About {{ task.dayCount }} days.</span>
      <div
        v-for="(member, index) in members"
        :key="index"
        class="avatar"
      >
        <img
          :src="member.avatar"
          alt="Profil picture"
        >
      </div>
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
    /** Returns CSS custom properties */
    color () {
      const { r, g, b } = this.task.color
      return {
        '--color': `${r}, ${g}, ${b}`
      }
    },

    members () {
      return this.task.members || []
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
$easing: cubic-bezier(.19, 1, .22, 1);

.task-timeline-event {
  font-size: 0.8rem;
  color: rgba(var(--color), 1);
  background-color: rgba(var(--color), 0.2);
  border: 1px solid rgba(var(--color), 0.5);
  border-left: 4px solid rgba(var(--color), 1);
  border-radius: 4px;
  padding: .7em 1.5em;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow:
    0 2px 12px rgba(var(--color), 0),
    0 5px 12px -4px rgba(var(--color), 0);
  cursor: pointer;
  transition: all .6s $easing;

  &.highlighted,
  &:hover {
    background-color: rgba(var(--color), 0.3);
    box-shadow:
      0 2px 12px rgba(var(--color), 0.2),
      0 5px 12px -4px rgba(var(--color), 0.15);
  }
}

.label {
  font-weight: 500;
  flex-grow: 1;
}

.avatar {
  display: inline-block;
  $size-image: 1.8rem;
  width: 1.3rem;
  height: $size-image;
  z-index: 1;

  & > img {
    background-color: var(--color-light-2);
    border: 1px solid white;
    border-radius: 50%;
    width: $size-image;
    height: $size-image;
    object-fit: cover;
    transition: transform .2s $easing;
  }

  &:hover {
    z-index: 2;

    & > img {
      transform: scale(1.08);
    }
  }
}

.fade-enter-active {
  transform-origin: 0% 50%;
  transition: all 1.2s $easing .2s;
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
