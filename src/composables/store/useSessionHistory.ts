import { computed, reactive } from 'vue'
import useSessionBests from './useSessionBests'
import { SessionHistory, SessionStats } from '@/types/Store'
import { Results, ResultState } from '@/types/Timer'


const sessionHistory: SessionHistory = reactive({
  single: [],
  mo3: [],
  ao5: [],
  ao12: []
})


export default function useSessionHistory() {
  const getSessionHistory = computed(() => sessionHistory)

  const getCurrentSingle = computed(() => sessionHistory.single.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : sessionHistory.single[sessionHistory.single.length - 1]
  )
  const getCurrentMo3 = computed(() => sessionHistory.mo3.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : sessionHistory.mo3[sessionHistory.mo3.length - 1]
  )
  const getCurrentAo5 = computed(() => sessionHistory.ao5.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : sessionHistory.ao5[sessionHistory.ao5.length - 1]
  )
  const getCurrentAo12 = computed(() => sessionHistory.ao12.length === 0 ?
    ResultState.NOT_ENOUGH_TIMES : sessionHistory.ao12[sessionHistory.ao12.length - 1]
  )
  
  const removeLastFromSessionHistory = () => {
    sessionHistory.single.pop()
    sessionHistory.mo3.pop()
    sessionHistory.ao5.pop()
    sessionHistory.ao12.pop()
  }

  const addToSessionHistory = ({ single, mo3, ao5, ao12 }: SessionStats) => {
    sessionHistory.single.push(single)
    sessionHistory.mo3.push(mo3)
    sessionHistory.ao5.push(ao5)
    sessionHistory.ao12.push(ao12)
  }
  
  const { updateBests } = useSessionBests()
  const setSessionHistory = (results: Results) => {
    sessionHistory.single = []
    sessionHistory.mo3 = []
    sessionHistory.ao5 = []
    sessionHistory.ao12 = []

    results.forEach(({ time }, index) => {
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