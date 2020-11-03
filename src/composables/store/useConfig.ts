import { computed, reactive } from 'vue'
import useLocalStorage from '../useLocalStorage'
import { Config } from '@/types/Store'
import { BasicCustomSessionsConfigs, SessionConfig } from '@/types/DB'


const {
  getConfig: getConfigLS,
  getCustomSessionsConfig: getCustomSessionsConfigLS
} = useLocalStorage()


const config: Config = reactive(getConfigLS())
const sessionsConfig: BasicCustomSessionsConfigs = reactive({
  basic: [
    { name: '2x2', key: 1, cube: 'c2x2' },
    { name: '3x3', key: 2, cube: 'c3x3' },
    { name: '4x4', key: 3, cube: 'c4x4' },
    { name: '5x5', key: 4, cube: 'c5x5' },
    { name: '6x6', key: 5, cube: 'c6x6' },
    { name: '7x7', key: 6, cube: 'c7x7' },
    { name: '3x3 oh', key: 7, cube: 'c3x3oh' },
    { name: '3x3 bld', key: 8, cube: 'c3x3bld' },
    { name: '4x4 bld', key: 9, cube: 'c4x4bld' },
    { name: '5x5 bld', key: 10, cube: 'c5x5bld' },
    { name: '3x3 mbld', key: 11, cube: 'c3x3mbld' },
    { name: '3x3 fm', key: 12, cube: 'c3x3fm' },
    { name: 'pyraminx', key: 13, cube: 'pyraminx' },
    { name: 'megaminx', key: 14, cube: 'megaminx' },
    { name: 'skweb', key: 15, cube: 'skweb' },
    { name: 'square-1', key: 16, cube: 'square1' },
    { name: 'clock', key: 17, cube: 'clock' }
  ],
  custom: getCustomSessionsConfigLS()
})


export default function useConfig() {
  const getConfig = computed(() => config)
  const getSessionsConfig = computed(() => [...sessionsConfig.basic, ...sessionsConfig.custom])
  const getBasicConfig = computed(() => sessionsConfig.basic)
  const getCustomSessionsConfig = computed(() => sessionsConfig.custom)
  const removeSessionConfig = (key: number) => {
    sessionsConfig.custom = sessionsConfig.custom.filter((session) => session.key !== key)
  }

  const getStatsVisibility = computed(() => config.areStatsVisible)
  const toggleStatsVisibility = () => { config.areStatsVisible = !config.areStatsVisible }

  const getScrambleVisibility = computed(() => config.isScrambleVisible)
  const toggleScrambleVisibility = () => { config.isScrambleVisible = !config.isScrambleVisible }

  const getListVisibility = computed(() => config.isListVisible)
  const toggleListVisibility = () => { config.isListVisible = !config.isListVisible }

  const getCurrentSessionKey = computed(() => config.activeSessionKey)
  const setCurrentSessionKey = (key: number) => { config.activeSessionKey = key }  

  const getSelectedCubeType = computed(() => {
    const sessionData = getSessionsConfig.value.find((el) => el.key === getCurrentSessionKey.value)
    return sessionData ? sessionData.cube : sessionsConfig.basic[0].cube
  })

  const addSessionConfig = (config: SessionConfig) => { sessionsConfig.custom.push(config) }

  return {
    getConfig,
    getSessionsConfig,
    getBasicConfig,
    getCustomSessionsConfig,
    removeSessionConfig,

    getStatsVisibility,
    toggleStatsVisibility,

    getScrambleVisibility,
    toggleScrambleVisibility,

    getListVisibility,
    toggleListVisibility,

    getCurrentSessionKey,
    setCurrentSessionKey,

    getSelectedCubeType,

    addSessionConfig
  }
}