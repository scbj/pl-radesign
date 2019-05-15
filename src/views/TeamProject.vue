<template>
  <div class="team-project">
    <ul class="tasks">
      <li v-for="(task, index) in tasks" :key="index">
        <ProjectTask :name="task.name" :active="index === 0" owner="Leader" :picture="task.owner.avatar" />
      </li>
    </ul>
    <BaseCard>Project</BaseCard>
  </div>
</template>

<script>
import ProjectTask from '@/components/ProjectTask.vue'

import { tasks } from '@/assets/data/team-project'

export default {
  components: {
    ProjectTask
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

.tasks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.base-card {
  margin: 1rem;
}
</style>
