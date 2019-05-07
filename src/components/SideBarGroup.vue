<template>
  <section class="side-bar-group">
    <h2 :style="colorVariables">{{ title }}</h2>
    <nav>
      <slot />
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#00A456'
    }
  },

  computed: {
    colorVariables () {
      return {
        '--color': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-group {
  border-bottom: var(--border-1);
  font-size: 1.15rem;
}

h2 {
  color: var(--color-dark-1);
  font-size: 1.4rem;
  margin-left: 2.5em;
  position: relative;

  &::before {
    content: '';
    $size: .7em;
    border: .11em solid var(--color);
    border-radius: 50%;
    position: absolute;
    left: -1.5em;
    width: $size;
    height: $size;
    top: 50%;
    transform: translateY(-50%);
  }
}

nav {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
}
</style>
