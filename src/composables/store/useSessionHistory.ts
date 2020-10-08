import { computed } from 'vue'

import useSessionBests from './useSessionBests'
import useState from './useState'

import { SessionStats } from '@/types/Store'
import { ResultState } from '@/types/Timer'

export default function useSessionHistory() {
  const { state } = useState()

  const getSessionHistory = computed(() => state.sessionHistory)

  const getCurrentSingle = computed(() => state.sessionHistory.single.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : state.sessionHistory.single[state.sessionHistory.single.length - 1]
  )
  const getCurrentMo3 = computed(() => state.sessionHistory.mo3.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : state.sessionHistory.mo3[state.sessionHistory.mo3.length - 1]
  )
  const getCurrentAo5 = computed(() => state.sessionHistory.ao5.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : state.sessionHistory.ao5[state.sessionHistory.ao5.length - 1]
  )
  const getCurrentAo12 = computed(() => state.sessionHistory.ao12.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : state.sessionHistory.ao12[state.sessionHistory.ao12.length - 1]
  )
  
  const removeLastFromSessionHistory = () => {
    state.sessionHistory.single.pop()
    state.sessionHistory.mo3.pop()
    state.sessionHistory.ao5.pop()
    state.sessionHistory.ao12.pop()
  }

  const addToSessionHistory = ({ single, mo3, ao5, ao12 }: SessionStats) => {
    state.sessionHistory.single.push(single)
    state.sessionHistory.mo3.push(mo3)
    state.sessionHistory.ao5.push(ao5)
    state.sessionHistory.ao12.push(ao12)
  }
  
  const { updateBests } = useSessionBests()
  const setSessionHistory = () => {
    state.sessionResults.forEach(({ time }, index) => {
      addToSessionHistory(updateBests(time, index))
    })
  }

  return {
    getSessionHistory,

    getCurrentSingle,
    getCurrentMo3,
    getCurrentAo5,
    getCurrentAo12,

    removeLastFromSessionHistory,
    addToSessionHistory,
    setSessionHistory
  }
}