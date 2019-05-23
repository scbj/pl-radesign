<template>
  <BaseCard class="task-timeline" :style="style">
    <div class="controls">
    </div>
    <div class="timeline">
      <template v-for="(task, index) in tasks">
        <span class="task-name" :key="index" :style="{ '--row-position': index }">
          {{ task.name }}
        </span>
      </template>
    </div>
  </BaseCard>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  computed: {
    style () {
      return {
        '--task-count': this.tasks.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.task-timeline {
  margin: 1rem;
}

.controls {
  background: rgba(black,.02);
  height: 80px;
}

.timeline {
  background: rgba(black,.06);
  display: grid;
  grid-template-columns: 10em repeat(30, 1fr);
  grid-template-rows: repeat(var(--task-count), 50px);
  grid-row-gap: 2rem;
}

.task-name {
  grid-column: 1/2;
}
</style>
