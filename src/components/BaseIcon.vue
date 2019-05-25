<template>
  <svgicon class="base-icon" :icon="iconName" />
</template>

<script>
import '@/assets/icons'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  computed: {
    iconName () {
      // Matches the name of the assets
      return `icon-noun-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.base-icon {
  fill: var(--color-light-5);
  $size: 2em;
  height: $size;
  width: $size;
}
</style>
