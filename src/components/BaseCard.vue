<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  background: var(--color-light-1);
  border-radius: .4rem;
  padding: 2rem;
  box-shadow: 0px 2px 30px -4px rgba(rgb(177, 155, 155), 10%);
  transition: box-shadow .1s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 30px -5px rgba(rgb(177, 155, 155), 20%);
  }
}
</style>
