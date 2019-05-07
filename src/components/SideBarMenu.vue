<template>
  <SideBarGroup title="Menu" color="#ed0a20">
      <ul>
        <li v-for="item in menuItems" :key="item.path">
          <router-link :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </SideBarGroup>
</template>

<script>
import SideBarGroup from '@/components/SideBarGroup.vue'

export default {
  components: {
    SideBarGroup
  },

  data () {
    return {
      menuItems: [
        {
          label: 'Home page',
          path: '/'
        },
        {
          label: 'Team data',
          path: '/data'
        },
        {
          label: 'Team project',
          path: '/project'
        },
        {
          label: 'Team collect',
          path: '/collect'
        }
      ]
    }
  }
}
</script>
