<template>
  <SideBarGroup title="Skills">
      <ul>
        <li v-for="(item, key) in items" :key="key">
          <router-link :to="'/skill/'+ item.label">{{ item.label }}</router-link>
        </li>
      </ul>
    </SideBarGroup>
</template>

<script>
import { skillItems } from '@/assets/data/side-bar'
import SideBarGroup from '@/components/SideBarGroup.vue'

export default {
  components: {
    SideBarGroup
  },

  computed: {
    items: () => skillItems
  }
}
</script>
