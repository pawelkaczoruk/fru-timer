import { computed, Ref, ref } from 'vue'
import useMath from '../useMath'
import { Result, Results } from '@/types/Timer'


const sessionResults: Ref<Results> = ref([])


export default function useSessionResults() {
  const getSessionLength = computed(() => sessionResults.value.length)

  const getSessionResults = computed(() => sessionResults.value)
  const setSessionResults = (results: Results) => { sessionResults.value = results }

  const addSessionResult = (result: Result) => { sessionResults.value.push(result) }
  const getLastSessionResult = computed(() => sessionResults.value[getSessionLength.value - 1])
  const removeLastSessionResult = () => { sessionResults.value.pop() }
  const updateLastSessionResult = (result: Result) => { sessionResults.value[getSessionLength.value - 1] = result }

  const { getAverage } = useMath()
  const getAo5 = (startIndex: number) => getAverage('avg', getSessionResults.value, startIndex, 5)
  const getAo12 = (startIndex: number) => getAverage('avg', getSessionResults.value, startIndex, 12)
  const getMo3 = (startIndex: number) => getAverage('mean', getSessionResults.value, startIndex, 3)
  const getSessionMean = () => getAverage('mean', getSessionResults.value)

  return {
    getSessionLength,
    
    getSessionResults,
    setSessionResults,

    addSessionResult,
    getLastSessionResult,
    removeLastSessionResult,
    updateLastSessionResult,

    getAo5,
    getAo12,
    getMo3,
    getSessionMean
  }
}