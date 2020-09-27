import { reactive, computed } from 'vue'
import useLocalStorage from './useLocalStorage'
import { State } from '@/types/Store'
import { Result } from '@/types/Timer'

const { getConfig, getCustomSessionsConfig } = useLocalStorage()
const state: State = reactive({
  currentTime: 0,
  config: getConfig(),
  sessionsConfig: {
    basic: [
      { name: '3x3', key: 1 },
      { name: '2x2', key: 2 },
      { name: '3x3 OH', key: 3 },
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
    custom: getCustomSessionsConfig()
  },
  sessionResults: []
})

export default function useStore() {
  const getSessionsConfig = computed(() => [...state.sessionsConfig.basic, ...state.sessionsConfig.custom])

  const getCurrentTime = computed(() => Math.floor(state.currentTime / 10) * 10)
  const setCurrentTime = (time: number) => { state.currentTime = time }

  const getCurrentScramble = computed(() => 'scramble here') // to implement
  const getCurrentSessionKey = computed(() => 1) // to implement
  const getCurrentSessionLength = computed(() => 0) // to implement

  const setSessionResults = (results: Array<Result>) => { state.sessionResults = results }
  const getSessionResults = computed(() => state.sessionResults)

  return {
    getSessionsConfig,

    getCurrentTime,
    setCurrentTime,

    getCurrentScramble,
    getCurrentSessionKey,
    getCurrentSessionLength,

    setSessionResults,
    getSessionResults
  }
}
