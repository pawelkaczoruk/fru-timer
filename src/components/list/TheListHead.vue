<template>
  <li class="list-head">

    <OrderButton
      @click="orderByDate()"
      :highlight="getHighlight(OrderBy.ASC_DATE, OrderBy.DESC_DATE)"
    >#</OrderButton>
    <OrderButton
      @click="orderBySingle()"
      :highlight="getHighlight(OrderBy.ASC_SINGLE, OrderBy.DESC_SINGLE)"
    >time</OrderButton>
    <OrderButton
      @click="orderByMo3()"
      :highlight="getHighlight(OrderBy.ASC_MO3, OrderBy.DESC_MO3)"
    >mo3</OrderButton>
    <OrderButton
      @click="orderByAo5()"
      :highlight="getHighlight(OrderBy.ASC_AO5, OrderBy.DESC_AO5)"
    >ao5</OrderButton>
    <OrderButton
      @click="orderByAo12()"
      :highlight="getHighlight(OrderBy.ASC_AO12, OrderBy.DESC_AO12)"
    >ao12</OrderButton>
    <OrderButton
      @click="orderByComment()"
      :highlight="getHighlight(OrderBy.ASC_COMMENT, OrderBy.DESC_COMMENT)"
    >
      <svg
        class="icon"
        viewBox="0 0 28 21.995"
      >
        <path
          d="M-1733.666-636a1,1,0,0,1-.445-.105,1,1,0,0,1-.556-.9v-3.733H-1735a5.006,5.006,0,0,1-5-5V-653a5.005,5.005,0,0,1,5-5h18a5.006,5.006,0,0,1,5,5v7.26a5.006,5.006,0,0,1-5,5h-10.114l-5.947,4.529A.991.991,0,0,1-1733.666-636Zm-.334-12v2h17v-2Zm0-5v2h17v-2Z"
          transform="translate(1740 658)"
        />
      </svg>
    </OrderButton>

  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OrderButton from './OrderButton.vue'
import useListSorter from '@/composables/useListSorter'
import { OrderBy } from '@/types/Order'

export default defineComponent({
  name: 'TheListHead',
  components: { OrderButton },

  setup() {
    const {
      orderByDate,
      orderBySingle,
      orderByMo3,
      orderByAo5,
      orderByAo12,
      orderByComment,
      getOrderBy
    } = useListSorter()

    const getHighlight = (order1: OrderBy, order2: OrderBy) => {
      return order1 === getOrderBy.value || order2 === getOrderBy.value
    }

    return {
      orderByDate,
      orderBySingle,
      orderByMo3,
      orderByAo5,
      orderByAo12,
      orderByComment,
      OrderBy,
      getHighlight
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.list-head {
  display: grid;
  grid-template-columns: 2em repeat(4, 1fr) 1em;
  gap: 0.25em;
  padding: 0 0.5em;
  border-bottom: 0.25rem solid var(--c-text-secondary);
  font-size: 0.875em;
  color: var(--c-text-secondary);
}

.icon { width: 100%; }

</style>