<template>

  <li
    class="list-item"
    :class="isExpanded ? 'active' : ''"
    @click="isExpanded = !isExpanded"
  >
    <span>{{ item.number }}</span>
    <span>{{ getFormattedTime(item.result.time.value, item.result.time.penalty) }}</span>
    <span>{{ getFormattedTime(item.mo3) }}</span>
    <span>{{ getFormattedTime(item.ao5) }}</span>
    <span>{{ getFormattedTime(item.ao12) }}</span>
    <span class="center-content">
      <svg
        class="icon"
        v-if="item.result.comment"
        viewBox="0 0 22 22"
      >
        <circle cx="11" cy="11" r="11" />
      </svg>
    </span>
  </li>

  <transition name="expand">
    <ListItemDetails
      v-show="isExpanded"
      :item="item"
    />
  </transition>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ListItemDetails from './ListItemDetails.vue'
import useTimeFormatter from '@/composables/useTimeFormatter'
import { SortableListItem } from '@/types/Order'

export default defineComponent({
  name: 'ListItem',
  components: { ListItemDetails },
  props: {
    item: {
      type: Object as () => SortableListItem,
      required: true
    }
  },

  setup() {
    const { getFormattedTime } = useTimeFormatter()
    const isExpanded = ref(false)

    return {
      getFormattedTime,
      isExpanded
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.list-item {
  display: grid;
  grid-template-columns: 2em repeat(4, 1fr) 1em;
  align-items: center;
  justify-items: center;
  padding: 0.5em;
  font-size: 0.875em;
  color: var(--c-text-secondary);
  transition: color 0.4s ease-in-out;

  &.active { color: var(--c-menu-icon-active); }

  @include hover() { color: var(--c-menu-icon-active); }
}

.icon {
  width: 50%;
  fill: var(--c-text-secondary);
}

.list-item-details { @include expandAnimation(); }

</style>