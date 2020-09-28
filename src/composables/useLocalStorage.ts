import { Config } from '@/types/Store'
import { SessionConfigItem } from '@/types/DB'

export default function useLocalStorage() {
  const getConfig = (): Config => {
    const data = localStorage.getItem('config')
    if (typeof data === 'string') return JSON.parse(data)
    return {
      activeSessionKey: 1
    }
  }

  const setConfig = (config: Config) => {
    localStorage.setItem('config', JSON.stringify(config))
  }

  const getCustomSessionsConfig = (): Array<SessionConfigItem> => {
    const data = localStorage.getItem('customSessions')
    if (typeof data === 'string') return JSON.parse(data)
    return []
  }
  
  const setCustomSessionsConfig = (config: Array<SessionConfigItem>) => {
    localStorage.setItem('customSessions', JSON.stringify(config))
  }

  return {
    getConfig,
    setConfig,
    getCustomSessionsConfig,
    setCustomSessionsConfig
  }
}