<template>
  <header class="app-header">
    <BaseIcon class="icon-search" name="search" />
    <div class="search">
      <span>Search for members and works...</span>
    </div>
    <div class="separator" />
    <div class="notification">
      <BaseIcon name="bell" />
    </div>
    <div class="separator" />
    <BaseIcon name="cog" />
    <div class="separator" />
    <HeaderUser class="profil" />
  </header>
</template>

<script>
import '../assets/icons'
import HeaderUser from '@/components/HeaderUser.vue'

export default {
  components: {
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

.search {
  flex-grow: 1;
}

.separator {
  align-self: stretch;
  border-right: var(--border-1)
}

.base-icon {
  margin: 0 1.5rem;

  &.icon-search {
    margin-left: 2.7rem;
    margin-right: 1.8rem;
  }
}

.notification {
  margin: 0 1.5rem;
  position: relative;

  & > .base-icon {
    margin: 0;
  }

  &::after {
    content: '';
    background: #ed0a20;
    border: .11rem solid;
    border-color: var(--color-light-1);
    border-radius: 50%;
    $size: .8rem;
    width: $size;
    height: $size;
    position: absolute;
    top: -0.3rem;
    right: .1rem;
  }
}

.profil {
  margin-right: 3rem;
}
</style>
