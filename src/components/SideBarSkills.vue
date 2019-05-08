<template>
  <SideBarGroup title="Skills">
      <ul>
        <li v-for="(item, key) in items" :key="key">
          <router-link :to="'/skill/'+ item.label" class="link" active-class="active">
            <span class="indicator" />
            <h3 class="label">{{ item.label }}</h3>
            <span class="count">{{ item.count }}</span>
          </router-link>
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

<style lang="scss" scoped>
$highlight-color: #2e65fd;

.link {
  margin: 1.5em 1.2em;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.active {
    > .indicator {
      background: $highlight-color;
    }

    > .label {
      color: $highlight-color;
    }

    > .count {
      color: white;
      background: $highlight-color;
    }
  }
}

.indicator {
  background: $highlight-color;
  background: transparent;
  border-radius: 50%;
  $size: .7em;
  width: $size;
  height: $size;
}

.label {
  flex-grow: 1;
  margin-left: 1.3em;
}

.count {
  color: $highlight-color;
  border: 1px solid rgba($highlight-color, 20%);
  border-radius: 1em;
  font-size: 0.7rem;
  font-weight: 600;
  padding: .2em .5em;
}
</style>
