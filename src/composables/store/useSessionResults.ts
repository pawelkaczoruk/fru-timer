import { computed } from 'vue'

import useMath from '../useMath'
import useState from './useState'

import { Result } from '@/types/Timer'

export default function useSessionResults() {
  const { state } = useState()

  const getSessionLength = computed(() => state.sessionResults.length)

  const getSessionResults = computed(() => state.sessionResults)
  const setSessionResults = (results: Array<Result>) => { state.sessionResults = results }

  const addSessionResult = (result: Result) => { state.sessionResults.push(result) }
  const getLastSessionResult = computed(() => state.sessionResults[getSessionLength.value - 1])
  const removeLastSessionResult = () => { state.sessionResults.pop() }
  const updateLastSessionResult = (result: Result) => { state.sessionResults[getSessionLength.value - 1] = result }

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