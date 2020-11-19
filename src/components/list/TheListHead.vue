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
      <SvgIcon icon="comment" />
    </OrderButton>

  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/utility/SvgIcon.vue'
import OrderButton from './OrderButton.vue'
import useListSorter from '@/composables/useListSorter'
import { OrderBy } from '@/types/Order'

export default defineComponent({
  name: 'TheListHead',
  components: {
    OrderButton,
    SvgIcon
  },

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
  @include text(0.875em, $c: var(--c-text-secondary));
  display: grid;
  grid-template-columns: 2em repeat(4, 1fr) 1em;
  gap: 0.25em;
  padding: 0 0.5em;
  border-bottom: 0.25rem solid var(--c-text-secondary);
}

</style>