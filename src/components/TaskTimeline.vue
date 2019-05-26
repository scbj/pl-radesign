<template>
  <BaseCard class="task-timeline" :style="style">
    <div class="controls">
      <div class="month">
        <h2>April 3, 2019 </h2>
        <BaseButtonIcon
          class="button-next"
          name="chevron-right"
          color="#2e65fd"
        />
      </div>
      <div class="scale">
        Day Week Month Year
      </div>
      <BaseButtonIcon name="add" color="#2e65fd" />
    </div>
    <div class="timeline">
      <template v-for="(task, index) in tasks">
        <!-- Header: Task name -->
        <span
          :key="`task-${index}`"
          class="task-name"
          :style="{ '--row': index + 1 }"
        >
          {{ task.name | upperCase }}
        </span>
        <!-- Events -->
        <TaskTimelineEvent
          :key="`event-${index}`"
          class="event"
          :task="task"
          :style="{ '--row': index + 1, '--column': `${task.dayStart + 1}/span ${task.dayCount}`}"
        />
      </template>

      <template v-for="day in days">
        <!-- Legend: Days of the month -->
        <span
          :key="`day-${day}`"
          class="day"
          :style="{ '--column': day + 1}"
        >
          {{ day }}th
        </span>
        <!-- Separators -->
        <b
          :key="`separator-${day}`"
          class="separator"
          :style="{ '--column': day + 1 }"
        />
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

  filters: { upperCase },

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
    },

    days () {
      // Generates an array of numbers from 1 to n with a step of 2
      const labels = []
      const labelCount = 15
      const step = 2
      for (let i = 1; labels.length < labelCount; i += step) {
        labels.push(i)
      }
      return labels
    }
  }
}
</script>

<style lang="scss" scoped>
.task-timeline {
  margin: 1rem;

  &.base-card {
    padding: 0;
  }
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;

  .button-next {
    margin-left: 1rem;
  }
}

.month {
  h2 {
    display: inline-block;
    font-weight: 5  00;
    color: var(--color-dark-1);
  }
}

.timeline {
  display: grid;
  grid-template-columns: 10em repeat(30, 1fr);
  grid-template-rows: repeat(var(--task-count), 50px);
  grid-row-gap: 2rem;
  align-items: center;
  padding: 3rem;
  padding-top: 0;
  position: relative;
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
  position: relative;
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
  position: relative;
  grid-column: var(--column);
  grid-row: var(--row);
}
</style>
