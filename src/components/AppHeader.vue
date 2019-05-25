<template>
  <header class="app-header">
    <HeaderSearch />
    <b class="separator" />
    <div class="notification">
      <BaseButtonIcon name="bell" />
    </div>
    <b class="separator" />
    <BaseButtonIcon name="cog" />
    <b class="separator" />
    <HeaderUser class="profil" />
  </header>
</template>

<script>
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderUser from '@/components/HeaderUser.vue'

export default {
  components: {
    HeaderSearch,
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background: var(--color-light-1);
  border-bottom: var(--border-1);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-search {
  flex-grow: 1;
}

.separator {
  border-right: var(--border-1);
  align-self: stretch;
}

.base-button-icon {
  margin: 0 1.5rem;
  position: relative;
}

.notification .base-button-icon::after {
  content: '';
  background: #ed0a20;
  border: 2px solid;
  border-color: var(--color-light-1);
  border-radius: 50%;
  $size: .8rem;
  width: $size;
  height: $size;
  position: absolute;
  top: -0.3rem;
  right: .1rem;
}

.profil {
  margin-right: 3rem;
}
</style>
