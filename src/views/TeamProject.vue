<template>
  <div class="team-project">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'

import { tasks } from '@/assets/data/team-project'

export default {
  components: {
    TaskList
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
