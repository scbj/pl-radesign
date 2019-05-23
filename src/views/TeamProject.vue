<template>
  <div class="team-project">
    <TaskList :tasks="tasks" />
    <TaskTimeline :tasks="tasks"  />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'
import TaskTimeline from '@/components/TaskTimeline.vue'

import { tasks } from '@/assets/data/team-project.js'
import { sort } from '@/transform/array.js'

export default {
  components: {
    TaskList,
    TaskTimeline
  },

  computed: {
    unorderedTasks: () => tasks,
    tasks () {
      return sort(this.unorderedTasks, task => task.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.team-project {
  padding: 2rem;
}
</style>
