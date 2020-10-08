import { reactive } from 'vue'

import useLocalStorage from '../useLocalStorage'

import { State } from '@/types/Store'
import { ResultState } from '@/types/Timer'

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
    single: ResultState.NOT_ENOUGH_TIMES,
    mo3: ResultState.NOT_ENOUGH_TIMES,
    ao5: ResultState.NOT_ENOUGH_TIMES,
    ao12: ResultState.NOT_ENOUGH_TIMES,
  }
})

export default function useState() {
  return { state }
}