<template>
  <button class="base-button-icon" :style="customProperties">
    <!-- Adds a special class if a color is specified to preserve the orignale one -->
    <BaseIcon :name="name" :class="{ fill: !!color }" />
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    }
  },

  computed: {
    customProperties () {
      return {
        '--fill': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-icon {
  background: none;
  border: none;
  outline: none;
  font-size: inherit;
  cursor: pointer;

  .base-icon.fill {
    fill: var(--fill);
  }
}
</style>
