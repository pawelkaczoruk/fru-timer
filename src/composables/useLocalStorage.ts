import { Config } from '@/types/Store'
import { SessionsConfig } from '@/types/DB'


const CONFIG: Config = {
  activeSessionKey: 2,
  areStatsVisible: false
}
const CONFIG_KEY = 'config'
const CUSTOM_SESSIONS_CONFIG: SessionsConfig = []
const CUSTOM_SESSIONS_CONFIG_KEY = 'customSessions'


export default function useLocalStorage() {
  const getConfig = (): Config => {
    const data = localStorage.getItem(CONFIG_KEY)
    if (typeof data === 'string') return JSON.parse(data)
    return CONFIG
  }
  const setConfig = (config: Config) => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
  }

  const getCustomSessionsConfig = (): SessionsConfig => {
    const data = localStorage.getItem(CUSTOM_SESSIONS_CONFIG_KEY)
    if (typeof data === 'string') return JSON.parse(data)
    return CUSTOM_SESSIONS_CONFIG
  }
  const setCustomSessionsConfig = (config: SessionsConfig) => {
    localStorage.setItem(CUSTOM_SESSIONS_CONFIG_KEY, JSON.stringify(config))
  }

  return {
    getConfig,
    setConfig,

    getCustomSessionsConfig,
    setCustomSessionsConfig
  }
}