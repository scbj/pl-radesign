<template>
  <header class="app-header">
    <IconSearch />
    <span>Search for members and works...</span>
  </header>
</template>

<script>
import IconSearch from '@/components/IconSearch.vue'

export default {
  components: {
    IconSearch
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background: var(--color-light-1);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon-search {
  fill: var(--color-light-3);
  margin: 2rem;
  margin-left: 3rem;
  width: 1.5em;
}
</style>
