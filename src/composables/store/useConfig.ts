import { computed, reactive } from 'vue'
import useLocalStorage from '../useLocalStorage'
import { Config } from '@/types/Store'
import { BasicCustomSessionsConfigs } from '@/types/DB'


const {
  getConfig: getConfigLS,
  getCustomSessionsConfig: getCustomSessionsConfigLS
} = useLocalStorage()


const config: Config = reactive(getConfigLS())
const sessionsConfig: BasicCustomSessionsConfigs = reactive({
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
})


export default function useConfig() {
  const getConfig = computed(() => config)
  const getSessionsConfig = computed(() => [...sessionsConfig.basic, ...sessionsConfig.custom])

  const getStatsVisibility = computed(() => config.areStatsVisible)
  const toggleStatsVisibility = () => config.areStatsVisible = !config.areStatsVisible

  const getCurrentSessionKey = computed(() => config.activeSessionKey)
  const setCurrentSessionKey = (key: number) => { config.activeSessionKey = key }  

  const getSelectedCubeType = computed(() => {
    const sessionData = getSessionsConfig.value.find((el) => el.key === getCurrentSessionKey.value)
    return sessionData ? sessionData.cube : sessionsConfig.basic[0].cube
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