<template>
  <div class="list-display">

    <div class="list-container">
      <TheListHead />
      <ul class="list">
        <ListItem
          v-for="(item) in getSortedList"
          :key="item.id"
          :item="item"
        />
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from './ListItem.vue'
import TheListHead from './TheListHead.vue'
import useListSorter from '@/composables/useListSorter'

export default defineComponent({
  name: 'TheListDisplay',
  components: {
    ListItem,
    TheListHead
  },

  setup() {
    const { getSortedList } = useListSorter()

    return { getSortedList }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.list-display {
  @include rect(100%, calc(100% - 3.75em - 2 * 0.625em - 3.5625em));
  max-width: 22.5em;
  padding: 0 0.5em;
  overflow: hidden;
  user-select: none;
}

.list-container {
  height: 100%;
  padding: 2em 0.75em;
  border-radius: 0.75em;
  background: var(--c-menu);
}

.list {
  @include scrollReset();
  height: calc(100% - 2em);
}

</style>