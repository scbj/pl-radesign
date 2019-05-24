<template>
  <BaseCard
    class="task-item"
    @mouseenter.native="emitEvent(true)"
    @mouseleave.native="emitEvent(false)"
  >
    <h3 class="name">
      {{ task.name | upperCase }}
    </h3>
    <span>{{ owner }}</span>
    <img
      class="picture"
      :src="task.owner.avatar"
      alt="Profil picture"
    >
  </BaseCard>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import { upperCase } from '@/filters/string.js'

export default {

  filters: { upperCase },
  props: {
    task: {
      type: Object,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
  },

  methods: {
    emitEvent (highlighted) {
      EventBus.$emit('ui@task-highlighting:toggle', {
        highlighted,
        task: this.task
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.task-item {
  $size: 15rem;
  height: $size;
  width: $size;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    .name {
      color: #ff3974;
    }

    span {
      color: var(--color-dark-2);
    }

    .picture {
      border-color: #ff3974;
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
  border: 1px solid transparent;
  border-radius: 50%;
  $size: 5rem;
  width: $size;
  height: $size;
}
</style>
