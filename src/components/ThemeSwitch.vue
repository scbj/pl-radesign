<template>
  <div class="theme-switch" @click="toggle">
    <div :class="{ checked: activeTheme === 'moon' }" class="toggle" />
    <div class="label">
      <span :class="{ active: activeTheme === 'sun' }">Sun</span>
      /
      <span :class="{ active: activeTheme === 'moon' }">Moon</span>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/reactivity/event-bus.js'

export default {
  data () {
    return {
      activeTheme: 'sun'
    }
  },

  watch: {
    activeTheme (theme) {
      EventBus.$emit('ui@theme:change', theme)
    }
  },

  methods: {
    isActive (themeName) {
      return this.activeTheme === themeName.toLowerCase()
    },

    toggle () {
      const sunTheme = 'sun'
      const moonTheme = 'moon'
      this.activeTheme = this.activeTheme === sunTheme
        ? moonTheme
        : sunTheme
    }
  }
}
</script>

<style lang="scss" scoped>
$highlight-color: #2e65fd;

.theme-switch {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.toggle {
  background: var(--color-light-3);
  border-radius: 999px;
  width: 35px;
  height: 24px;
  margin: 1.3rem;
  position: relative;
  transition: background-color .16s ease-out;

  &::before {
    content: '';
    background-color: $highlight-color;
    border-radius: 999px;
    position: absolute;
    width: 17px;
    height: 17px;
    box-shadow: -2px 1px 2px rgba($highlight-color, 30%);
    transform: translate(4px, 3px);
    transition: transform .2s ease-in-out;
  }

  &.checked {
    &::before {
      transform: translate(15px, 3px);
    }
  }
}

span.active {
  color: var(--color-dark-2);
}
</style>
