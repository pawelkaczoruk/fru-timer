<template>
  <li class="list-item-details">

    <span class="date">Date: {{ new Date(item.result.date).toLocaleString() }}</span>
    <span>Comment: {{ item.result.comment }}</span>
    <span class="scramble">Scramble: {{ item.result.scramble }}</span>

  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SortableListItem } from '@/types/Order'

export default defineComponent({
  name: 'ListItemDetails',
  props: {
    item: {
      type: Object as () => SortableListItem,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.list-item-details {
  @include scrollReset();
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: 0.5em;
  height: 10em;
  padding: 0 0.5em;
  border-bottom: 0.125rem solid var(--c-text-secondary);
  border-top: 0.125rem solid var(--c-text-secondary);
  color: var(--c-text-secondary);
  font-size: 0.875em;
  user-select: text;
}

.date { padding-top: 0.5em; }
.scramble { padding-bottom: 0.5em; }

</style>