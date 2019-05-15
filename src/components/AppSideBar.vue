<template>
  <section class="app-side-bar">
    <slot></slot>
    <div class="container">
      <SideBarMenu />
      <SideBarSkills class="stretch" />
      <ThemeSwitch />
    </div>
  </section>
</template>

<script>
import SideBarMenu from '@/components/SideBarMenu.vue'
import SideBarSkills from '@/components/SideBarSkills.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default {
  components: {
    SideBarMenu,
    SideBarSkills,
    ThemeSwitch
  }
}
</script>

<style lang="scss" scoped>
.app-side-bar {
  background: var(--color-light-1);
  border-right: var(--border-1);
  display: flex;
  flex-direction: column;
}

.side-bar-group {
  padding-top: 3.5rem;
}

.stretch {
  flex-grow: 1;
}

.container {
  overflow-y: auto;
}
</style>
