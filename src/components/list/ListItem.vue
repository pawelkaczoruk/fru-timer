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
      <SvgIcon
        icon="dot"
        v-if="item.result.comment"
      />
    </span>
  </li>

  <transition name="expand">
    <ListItemDetails
      v-if="isExpanded"
      :item="item"
    />
  </transition>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SvgIcon from '@/components/utility/SvgIcon.vue'
import ListItemDetails from './ListItemDetails.vue'
import useTimeFormatter from '@/composables/useTimeFormatter'
import { SortableListItem } from '@/types/Order'

export default defineComponent({
  name: 'ListItem',
  components: {
    ListItemDetails,
    SvgIcon
  },
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
  @include text(0.875em, $c: var(--c-text-secondary));
  display: grid;
  grid-template-columns: 2em repeat(4, 1fr) 1em;
  align-items: center;
  justify-items: center;
  padding: 0.5em;
  transition: color 0.4s ease-in-out;

  &.active {
    color: var(--c-menu-icon-active);

    .svg-icon { fill: var(--c-menu-icon-active); }
  }

  @include hover() {
    color: var(--c-menu-icon-active);

    .svg-icon { fill: var(--c-menu-icon-active); }
  }
}

.svg-icon {
  width: 50%;
  fill: var(--c-text-secondary);
}

.list-item-details { @include animation(expand); }

</style>