import { Ref, ref, computed } from 'vue'
import useSessionHistory from './store/useSessionHistory'
import useSessionResults from './store/useSessionResults'
import { ResultState } from '@/types/Timer'
import { OrderBy, SortableList, SortingProps } from '@/types/Order'


const orderBy: Ref<OrderBy> = ref(OrderBy.DESC_DATE)


export default function useListSorter() {
  const { getSessionHistory } = useSessionHistory()
  const { getSessionResults } = useSessionResults()

  const getOrderBy = computed(() => orderBy.value)

  const orderByDate = () => {
    orderBy.value = orderBy.value === OrderBy.DESC_DATE ?
      OrderBy.ASC_DATE : OrderBy.DESC_DATE
  }

  const orderBySingle = () => {
    orderBy.value = orderBy.value === OrderBy.ASC_SINGLE ?
      OrderBy.DESC_SINGLE : OrderBy.ASC_SINGLE
  }

  const orderByMo3 = () => {
    orderBy.value = orderBy.value === OrderBy.ASC_MO3 ?
      OrderBy.DESC_MO3 : OrderBy.ASC_MO3
  }

  const orderByAo5 = () => {
    orderBy.value = orderBy.value === OrderBy.ASC_AO5 ?
      OrderBy.DESC_AO5 : OrderBy.ASC_AO5
  }

  const orderByAo12 = () => {
    orderBy.value = orderBy.value === OrderBy.ASC_AO12 ?
      OrderBy.DESC_AO12 : OrderBy.ASC_AO12
  }

  const orderByComment = () => {
    orderBy.value = orderBy.value === OrderBy.DESC_COMMENT ?
      OrderBy.ASC_COMMENT : OrderBy.DESC_COMMENT
  }

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

  const getSortedList = computed(() => {
    const data: SortableList = getSessionResults.value.map((result, i) => ({
      id: result.time.value + '.' + result.date,
      number: i + 1,
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
    getOrderBy,

    orderByDate,
    orderBySingle,
    orderByMo3,
    orderByAo5,
    orderByAo12,
    orderByComment,
    getSortedList
  }
}