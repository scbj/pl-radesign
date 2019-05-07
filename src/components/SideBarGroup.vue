<template>
  <section class="side-bar-group">
    <h2>{{ title }}</h2>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-group {
  border-bottom: var(--border-1)
}

h2 {
  color: var(--color-dark-1);
  font-size: 1.2rem;
  margin: 1.5rem;
  margin-top: 2rem;
}
</style>
