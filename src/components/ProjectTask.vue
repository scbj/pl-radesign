<template>
  <BaseCard :class="{ active }" class="project-task">
    <h3 class="name">{{ name | upperCase }}</h3>
    <span>{{ owner }}</span>
    <img class="picture" src="http://anything-ispossible.com/wp-content/uploads/2018/06/amaysancha-profil.jpg" alt="Profil picture">
  </BaseCard>
  <!-- ff3974 -->
</template>

<script>
import { upperCase } from '@/filters/string'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
  },

  filters: { upperCase }
}
</script>

<style lang="scss" scoped>
.project-task {
  $size: 15rem;
  height: $size;
  width: $size;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &.active {
    .name {
      color: #ff3974;
    }

    span {
      color: var(--color-dark-2);
    }
  }
}

.name {
  color: var(--color-dark-2);
  font-weight: bold;
}

span {
  font-weight: bold;
}

.picture {
  border-radius: 50%;
  $size: 5rem;
  width: $size;
  height: $size;
}
</style>
