<template>
  <SideBarGroup title="Menu" color="#ed0a20">
      <ul>
        <li v-for="item in items" :key="item.path">
          <router-link :to="item.path" class="link" active-class="active">
            <svgicon :icon="'icon-noun-' + item.icon"></svgicon>
            <h3>{{ item.label }}</h3>
          </router-link>
        </li>
      </ul>
    </SideBarGroup>
</template>

<script>
import '../assets/icons'
import { menuItems } from '@/assets/data/side-bar'
import SideBarGroup from '@/components/SideBarGroup.vue'

export default {
  components: {
    SideBarGroup
  },

  computed: {
    items: () => menuItems
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

    > h3 {
      color: $highlight-color;
      font-weight: bold;
    }

    > .svg-icon {
      fill: $highlight-color;
    }
  }
}

.svg-icon {
  fill: var(--color-light-3);
  margin: 1em 1.4em;
  margin-left: calc(1.5em + 1.4em);
  $size: 1.8em;
  height: $size;
  width: $size;
}
</style>
