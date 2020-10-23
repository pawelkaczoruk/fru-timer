<template>
  <div class="list-display">
    <button @click="orderBy = OrderBy.DESC_DATE">DESC_DATE</button> |
    <button @click="orderBy = OrderBy.ASC_DATE">ASC_DATE</button> |
    <button @click="orderBy = OrderBy.DESC_COMMENT">DESC_COMMENT</button> |
    <button @click="orderBy = OrderBy.ASC_COMMENT">ASC_COMMENT</button> |
    <ul>
      <li
        v-for="(item) in getOrderedData"
        :key="item.id"
      >
        <!-- {{ getSessionHistory.single.length - index }} -->
        {{ item.single }}
        {{ item.mo3 }}
        {{ item.ao5 }}
        {{ item.ao12 }}
        <!-- {{ getOrderedData.results[index] }} -->
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
import useSessionHistory from '@/composables/store/useSessionHistory'
import useSessionResults from '@/composables/store/useSessionResults'
import { OrderBy, SortableList, SortingProps } from '@/types/Order' 
import { ResultState } from '@/types/Timer'

export default defineComponent({
  name: 'TheListDisplay',

  setup() {
    const { getSessionHistory } = useSessionHistory()
    const { getSessionResults } = useSessionResults()

    const orderBy: Ref<OrderBy> = ref(OrderBy.DESC_DATE)

    const sort = (data: SortableList, property: SortingProps, ascending: boolean) => {
      const dir = ascending ? 1 : -1

      if (property === 'comment') {
        data.sort((a, b) => {
          if (a.result.comment > b.result.comment) return dir
          if (b.result.comment > a.result.comment) return -dir
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a[property] === b[property]) return 0
          if (a[property] === ResultState.NOT_ENOUGH_TIMES) return dir
          if (b[property] === ResultState.NOT_ENOUGH_TIMES) return -dir
          if (a[property] === ResultState.DNF) return dir
          if (b[property] === ResultState.DNF) return -dir
          return a[property] < b[property] ? -dir : dir
        })
      }
    }

    const getOrderedData = computed(() => {
      const data: SortableList = getSessionResults.value.map((result, i) => ({
        id: result.time.value + '.' + result.date,
        result,
        single: getSessionHistory.value.single[i],
        mo3: getSessionHistory.value.mo3[i],
        ao5: getSessionHistory.value.ao5[i],
        ao12: getSessionHistory.value.ao12[i]
      }))

      if (orderBy.value === OrderBy.DESC_DATE) data.reverse()
      else if (orderBy.value === OrderBy.ASC_COMMENT) sort(data, 'comment', true)
      else if (orderBy.value === OrderBy.DESC_COMMENT) sort(data, 'comment', false)
      else if (orderBy.value === OrderBy.ASC_SINGLE) sort(data, 'single', true)
      else if (orderBy.value === OrderBy.DESC_SINGLE) sort(data, 'single', false)
      else if (orderBy.value === OrderBy.ASC_MO3) sort(data, 'mo3', true)
      else if (orderBy.value === OrderBy.DESC_MO3) sort(data, 'mo3', false)
      else if (orderBy.value === OrderBy.ASC_AO5) sort(data, 'ao5', true)
      else if (orderBy.value === OrderBy.DESC_AO5) sort(data, 'ao5', false)
      else if (orderBy.value === OrderBy.ASC_AO12) sort(data, 'ao12', true)
      else if (orderBy.value === OrderBy.DESC_AO12) sort(data, 'ao12', false)

      return data
    })

    return {
      getOrderedData,
      orderBy,
      OrderBy
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';


</style>