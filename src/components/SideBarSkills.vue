<template>
  <SideBarGroup title="Skills">
      <ul>
        <li v-for="(item, key) in skillItems" :key="key">
          <router-link :to="'/skill/'+ item.label">{{ item.label }}</router-link>
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
      skillItems: [
        {
          label: 'ui/ux design',
          count: 178
        },
        {
          label: 'web design',
          count: 354
        },
        {
          label: 'illustrations',
          count: 78
        },
        {
          label: 'Dynamic effect',
          count: 132
        }
      ]
    }
  }
}
</script>
