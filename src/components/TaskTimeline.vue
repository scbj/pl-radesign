<template>
  <BaseCard class="task-timeline" :style="style">
    <div class="controls">
    </div>
    <div class="timeline">
      <!-- Header: Task name -->
      <template v-for="(task, index) in tasks">
        <span class="task-name" :key="`task-${index}`" :style="{ '--row': index + 1 }">
          {{ task.name | upperCase }}
        </span>
      </template>

      <!-- Legend: Days of the month -->
      <template v-for="day in days">
        <span class="day" :key="`day-${day}`" :style="{ '--column': day + 1}">
          {{ day }}th
        </span>
      </template>

      <template v-for="day in days">
        <b class="separator" :key="`separator-${day}`" :style="{ '--column': day + 1 }"  />
      </template>

      <template v-for="(task, index) in tasks">
        <TaskTimelineEvent
          class="event"
          :color="task.color"
          :key="`event-${index}`"
          :style="{ '--row': index + 1, '--column': `${task.dayStart + 1}/span ${task.dayCount}`}"
          :duration="task.dayCount" />
      </template>
    </div>
  </BaseCard>
</template>

<script>
import TaskTimelineEvent from '@/components/TaskTimelineEvent.vue'

import { upperCase } from '@/filters/string'

export default {
  components: {
    TaskTimelineEvent
  },

  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  filters: { upperCase },

  computed: {
    style () {
      return {
        '--task-count': this.tasks.length
      }
    },

    days () {
      // TODO: Refactoriser cette fonction...
      // Generate an array of number from 1 to n
      const numbers = [ 1 ]
      const lastNumber = () => numbers[numbers.length - 1]
      while (lastNumber() < 29) {
        numbers.push(lastNumber() + 2)
      }
      return numbers
    }
  }
}
</script>

<style lang="scss" scoped>
.task-timeline {
  margin: 1rem;
}

.controls {
  height: 80px;
}

.timeline {
  display: grid;
  grid-template-columns: 10em repeat(30, 1fr);
  grid-template-rows: repeat(var(--task-count), 50px);
  grid-row-gap: 2rem;
  align-items: center;
}

.task-name {
  grid-column: 1/2;
  grid-row: var(--row);
}

.day {
  grid-row: -1;
  grid-column: var(--column);
  transform: translateX(-25%);
}

.separator {
  z-index: 1;
  background: var(--color-light-3);
  width: 1px;
  grid-row: 1 / -1;
  grid-column: var(--column);
  align-self: stretch;
  justify-self: flex-start;
  transform: scaleY(1.05);
}

.event {
  z-index: 2;
  grid-column: var(--column);
  grid-row: var(--row);
}
</style>
