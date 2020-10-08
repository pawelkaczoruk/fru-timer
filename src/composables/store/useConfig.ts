import { computed } from 'vue'

import useState from './useState'

export default function useConfig() {
  const { state } = useState()

  const getConfig = computed(() => state.config)
  const getSessionsConfig = computed(() => [...state.sessionsConfig.basic, ...state.sessionsConfig.custom])

  const getStatsVisibility = computed(() => getConfig.value.areStatsVisible)
  const toggleStatsVisibility = () => getConfig.value.areStatsVisible = !getConfig.value.areStatsVisible

  const getCurrentSessionKey = computed(() => state.config.activeSessionKey)
  const setCurrentSessionKey = (key: number) => { state.config.activeSessionKey = key }  

  const getSelectedCubeType = computed(() => {
    const sessionData = getSessionsConfig.value.find((el) => el.key === getCurrentSessionKey.value)
    return sessionData ? sessionData.cube : state.sessionsConfig.basic[0].cube
  })

  return {
    getConfig,
    getSessionsConfig,

    getStatsVisibility,
    toggleStatsVisibility,

    getCurrentSessionKey,
    setCurrentSessionKey,

    getSelectedCubeType
  }
}