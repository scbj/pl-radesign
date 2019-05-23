<template>
  <ul class="task-list">
    <li v-for="(task, index) in tasks" :key="index">
      <ProjectTask
        class="task"
        :task="task"
        :active="index === 0"
        owner="Leader" />
    </li>
  </ul>
</template>

<script>
import ProjectTask from '@/components/ProjectTask.vue'

export default {
  components: {
    ProjectTask
  },

  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.task {
  margin: 1rem;
}
</style>
