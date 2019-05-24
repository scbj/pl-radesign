<template>
  <div class="team-project">
    <TaskList :tasks="tasks" />
    <TaskTimeline :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'
import TaskTimeline from '@/components/TaskTimeline.vue'

import { tasks } from '@/assets/data/team-project.js'

export default {
  components: {
    TaskList,
    TaskTimeline
  },

  computed: {
    tasks: () => tasks
  }
}
</script>

<style lang="scss" scoped>
.team-project {
  padding: 2rem;
}
</style>
