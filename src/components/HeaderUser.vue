<template>
  <div class="header-user">
    <div class="picture">
      <img :src="require('@/assets/images/avatars/profil.jpg')" alt="Profil picture">
    </div>
    <h2 class="username">
      Never_stop
    </h2>
  </div>
  <!-- Green dot: #00d56f -->
</template>

<style lang="scss" scoped>
.header-user {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.picture {
  margin: .7rem 2rem;
  position: relative;

  &::after {
    content: '';
    background: #00d56f;
    border: .11rem solid;
    border-color: var(--color-light-1);
    border-radius: 50%;
    $size: .8rem;
    width: $size;
    height: $size;
    position: absolute;
    bottom: .4rem;
    right: .1rem;
  }

  > img {
    background-color: var(--color-light-2);
    border-radius: 50%;
    $size: 3.5rem;
    width: $size;
    height: $size;
    object-fit: cover;
  }
}

.username {
  color: var(--color-dark-2);
}
</style>
