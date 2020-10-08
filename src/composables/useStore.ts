import { reactive, computed } from 'vue'
import useLocalStorage from './useLocalStorage'
import { SessionStats, State } from '@/types/Store'
import { Result, Time } from '@/types/Timer'
import useMath from './useMath'

const DNF = -1
const NOT_ENOUGH_TIMES = -2
const { getConfigLS, getCustomSessionsConfigLS } = useLocalStorage()
const state: State = reactive({
  currentTime: 0,
  currentScramble: '',
  config: getConfigLS(),
  sessionsConfig: {
    basic: [
      { name: '3x3', key: 1, cube: 'c3x3' },
      { name: '2x2', key: 2, cube: 'c2x2' },
      { name: '3x3 OH', key: 3, cube: 'c3x3' },
      // { name: '4x4', key: 4 },
      // { name: '5x5', key: 5 },
      // { name: '6x6', key: 6 },
      // { name: '7x7', key: 7 },
      // { name: '3x3 bld', key: 8 },
      // { name: '4x4 bld', key: 9 },
      // { name: '5x5 bld', key: 10 },
      // { name: '3x3 mbld', key: 11 },
      // { name: 'pyraminx', key: 12 },
      // { name: 'megaminx', key: 13 },
      // { name: 'sqweb', key: 14 },
      // { name: 'square 1', key: 15 },
    ],
    custom: getCustomSessionsConfigLS()
  },
  sessionResults: [],
  sessionHistory: {
    single: [],
    mo3: [],
    ao5: [],
    ao12: []
  },
  sessionBests: {
    single: NOT_ENOUGH_TIMES,
    mo3: NOT_ENOUGH_TIMES,
    ao5: NOT_ENOUGH_TIMES,
    ao12: NOT_ENOUGH_TIMES,
  }
})

const { getAverage, cutOffMillis } = useMath()
export default function useStore() {
  const getConfig = computed(() => state.config)
  const getSessionsConfig = computed(() => [...state.sessionsConfig.basic, ...state.sessionsConfig.custom])
  const getCurrentSessionLength = computed(() => state.sessionResults.length)
  const getCurrentSessionKey = computed(() => state.config.activeSessionKey)
  const setCurrentSessionKey = (key: number) => { state.config.activeSessionKey = key }  
  const getSelectedCubeType = computed(() => {
    const sessionData = getSessionsConfig.value.find((el) => el.key === getCurrentSessionKey.value)
    if (sessionData) return sessionData.cube
    return state.sessionsConfig.basic[0].cube
  })

  const getCurrentTime = computed(() => cutOffMillis(state.currentTime))
  const setCurrentTime = (time: number) => { state.currentTime = time }

  const getCurrentScramble = computed(() => state.currentScramble)
  const setCurrentScramble = (scramble: string) => { state.currentScramble = scramble }

  const setSessionResults = (results: Array<Result>) => { state.sessionResults = results }
  const addSessionResult = (result: Result) => { state.sessionResults.push(result) }
  const getSessionResults = computed(() => state.sessionResults)
  const getLastResult = computed(() => state.sessionResults[getCurrentSessionLength.value - 1])
  const removeLastSessionResult = () => { state.sessionResults.pop() }
  const updateLastResult = (result: Result) => { state.sessionResults[getCurrentSessionLength.value - 1] = result }

  const getAo5 = (startIndex: number) => getAverage('avg', getSessionResults.value, startIndex, 5)
  const getAo12 = (startIndex: number) => getAverage('avg', getSessionResults.value, startIndex, 12)
  const getMo3 = (startIndex: number) => getAverage('mean', getSessionResults.value, startIndex, 3)
  const getSessionMean = () => getAverage('mean', getSessionResults.value)

  const setBestSingle = (value: number) => { state.sessionBests.single = value }
  const setBestMo3 = (value: number) => { state.sessionBests.mo3 = value }
  const setBestAo5 = (value: number) => { state.sessionBests.ao5 = value }
  const setBestAo12 = (value: number) => { state.sessionBests.ao12 = value }
  const getBestSingle = computed(() => state.sessionBests.single)
  const getBestMo3 = computed(() => state.sessionBests.mo3)
  const getBestAo5 = computed(() => state.sessionBests.ao5)
  const getBestAo12 = computed(() => state.sessionBests.ao12)
  const getCurrentSingle = computed(() => state.sessionHistory.single.length === 0 ? NOT_ENOUGH_TIMES : state.sessionHistory.single[state.sessionHistory.single.length - 1])
  const getCurrentMo3 = computed(() => state.sessionHistory.mo3.length === 0 ? NOT_ENOUGH_TIMES : state.sessionHistory.mo3[state.sessionHistory.mo3.length - 1])
  const getCurrentAo5 = computed(() => state.sessionHistory.ao5.length === 0 ? NOT_ENOUGH_TIMES : state.sessionHistory.ao5[state.sessionHistory.ao5.length - 1])
  const getCurrentAo12 = computed(() => state.sessionHistory.ao12.length === 0 ? NOT_ENOUGH_TIMES : state.sessionHistory.ao12[state.sessionHistory.ao12.length - 1])
  const getSessionHistory = computed(() => state.sessionHistory)

  const removeLastFromHistory = () => {
    state.sessionHistory.single.pop()
    state.sessionHistory.mo3.pop()
    state.sessionHistory.ao5.pop()
    state.sessionHistory.ao12.pop()
  }

  const { isBetter } = useMath()

  const updateBests = (time: Time, index: number) => {
    const single = time.penalty === DNF ? DNF : time.penalty + time.value
    const mo3 = getMo3(index - 2)
    const ao5 = getAo5(index - 4)
    const ao12 = getAo12(index - 11)

    if (isBetter(single, getBestSingle.value)) setBestSingle(single)
    if (isBetter(mo3, getBestMo3.value)) setBestMo3(mo3)
    if (isBetter(ao5, getBestAo5.value)) setBestAo5(ao5)
    if (isBetter(ao12, getBestAo12.value)) setBestAo12(ao12)

    return {
      single,
      mo3,
      ao5,
      ao12
    }
  }

  const addToSessionHistory = ({ single, mo3, ao5, ao12 }: SessionStats) => {
    state.sessionHistory.single.push(single)
    state.sessionHistory.mo3.push(mo3)
    state.sessionHistory.ao5.push(ao5)
    state.sessionHistory.ao12.push(ao12)
  }

  const setAveragesAndBests = () => {
    getSessionResults.value.forEach(({ time }, index) => {
      addToSessionHistory(updateBests(time, index))
    })
  }

  return {
    getConfig,
    getSessionsConfig,
    getCurrentSessionLength,

    getCurrentTime,
    setCurrentTime,

    getCurrentScramble,
    setCurrentScramble,

    getCurrentSessionKey,
    setCurrentSessionKey,

    setSessionResults,
    addSessionResult,
    getSessionResults,
    getLastResult,
    removeLastSessionResult,
    updateLastResult,

    getSelectedCubeType,

    getAo5,
    getAo12,
    getMo3,
    getSessionMean,

    setBestSingle,
    setBestMo3,
    setBestAo5,
    setBestAo12,
    getBestSingle,
    getBestMo3,
    getBestAo5,
    getBestAo12,
    getCurrentSingle,
    getCurrentMo3,
    getCurrentAo5,
    getCurrentAo12,
    getSessionHistory,

    removeLastFromHistory,
    updateBests,
    addToSessionHistory,
    setAveragesAndBests
  }
}
