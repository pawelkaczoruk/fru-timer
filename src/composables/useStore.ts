import { reactive, computed } from 'vue'
import useLocalStorage from './useLocalStorage'
import { State } from '@/types/Store'
import { Result } from '@/types/Timer'

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
  sessionResults: []
})

export default function useStore() {
  const getConfig = computed(() => state.config)
  const getSessionsConfig = computed(() => [...state.sessionsConfig.basic, ...state.sessionsConfig.custom])
  const getCurrentSessionLength = computed(() => state.sessionResults.length)

  const getCurrentTime = computed(() => Math.floor(state.currentTime / 10) * 10)
  const setCurrentTime = (time: number) => { state.currentTime = time }

  const getCurrentScramble = computed(() => state.currentScramble)
  const setCurrentScramble = (scramble: string) => { state.currentScramble = scramble }

  const getCurrentSessionKey = computed(() => state.config.activeSessionKey)
  const setCurrentSessionKey = (key: number) => { state.config.activeSessionKey = key }

  const setSessionResults = (results: Array<Result>) => { state.sessionResults = results }
  const addSessionResult = (result: Result) => { state.sessionResults.push(result) }
  const getSessionResults = computed(() => state.sessionResults)
  const getLastResult = computed(() => state.sessionResults[getCurrentSessionLength.value - 1])
  const updateLastResult = (result: Result) => { state.sessionResults[getCurrentSessionLength.value - 1] = result }

  const getSelectedCubeType = computed(() => {
    const sessionData = getSessionsConfig.value.find((el) => el.key === getCurrentSessionKey.value)
    if (sessionData) return sessionData.cube
    return state.sessionsConfig.basic[0].cube
  })

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
    updateLastResult,

    getSelectedCubeType,
  }
}
