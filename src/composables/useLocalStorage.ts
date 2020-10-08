import { Config } from '@/types/Store'
import { SessionConfigItem } from '@/types/DB'

const CONFIG: Config = {
  activeSessionKey: 1,
  areStatsVisible: false
}
const CONFIG_KEY = 'config'
const CUSTOM_SESSIONS_CONFIG: Array<SessionConfigItem> = []
const CUSTOM_SESSIONS_CONFIG_KEY = 'customSessions'

export default function useLocalStorage() {
  const getConfigLS = (): Config => {
    const data = localStorage.getItem(CONFIG_KEY)
    if (typeof data === 'string') return JSON.parse(data)
    return CONFIG
  }

  const setConfigLS = (config: Config) => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
  }

  const getCustomSessionsConfigLS = (): Array<SessionConfigItem> => {
    const data = localStorage.getItem(CUSTOM_SESSIONS_CONFIG_KEY)
    if (typeof data === 'string') return JSON.parse(data)
    return CUSTOM_SESSIONS_CONFIG
  }
  
  const setCustomSessionsConfigLS = (config: Array<SessionConfigItem>) => {
    localStorage.setItem(CUSTOM_SESSIONS_CONFIG_KEY, JSON.stringify(config))
  }

  return {
    getConfigLS,
    setConfigLS,
    getCustomSessionsConfigLS,
    setCustomSessionsConfigLS
  }
}