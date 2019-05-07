<template>
  <section class="app-side-bar">
    <slot></slot>
    <SideBarMenu />
    <SideBarSkills />
  </section>
</template>

<script>
import SideBarMenu from '@/components/SideBarMenu.vue'
import SideBarSkills from '@/components/SideBarSkills.vue'

export default {
  components: {
    SideBarMenu,
    SideBarSkills
  }
}
</script>

<style lang="scss" scoped>
.app-side-bar {
  background: var(--color-light-1);
  border-right: var(--border-1)
}

.side-bar-group {
  margin: 1.5rem;
  margin-top: 3.5rem;
}
</style>
