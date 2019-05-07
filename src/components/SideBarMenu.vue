<template>
  <SideBarGroup title="Menu" color="#ed0a20">
      <ul>
        <li v-for="item in menuItems" :key="item.path">
          <router-link :to="item.path" class="link" active-class="active">
            <IconCopy />
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </SideBarGroup>
</template>

<script>
import IconCopy from '@/components/IconCopy.vue'
import SideBarGroup from '@/components/SideBarGroup.vue'

export default {
  components: {
    IconCopy,
    SideBarGroup
  },

  data () {
    return {
      menuItems: [
        {
          label: 'Home page',
          path: '/home'
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

<style lang="scss" scoped>
$highlight-color: #2e65fd;

.link {
  border-left: .2em solid transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  &.active {
    background: linear-gradient(to right, rgba($highlight-color, 12%), rgba($highlight-color, 0%));
    border-color: $highlight-color;
    color: $highlight-color;
    font-weight: bold;

    > .icon-copy {
      fill: $highlight-color;
    }
  }
}

.icon-copy {
  fill: var(--color-light-3);
  margin: .8em 1.4em;
  margin-left: calc(1.5em + 1.4em);
  width: 2em;
}
</style>
