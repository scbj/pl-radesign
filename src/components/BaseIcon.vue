<template>
  <svgicon class="base-icon" :icon="iconName" />
</template>

<script>
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
      return `icon-noun-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.base-icon {
  fill: var(--color-light-4);
  $size: 2em;
  height: $size;
  width: $size;
}
</style>
