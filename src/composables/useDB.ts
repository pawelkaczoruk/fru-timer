import Dexie from 'dexie'
import useSessionResults from './store/useSessionResults'
import useSessionHistory from './store/useSessionHistory'
import useConfig from './store/useConfig'
import { Result, Results } from '@/types/Timer'


const DB_NAME = 'fruTimer'
const DB_VERSION = 1
const OBJECT_STORE = { sessions: '&' }
const DB_TABLE = 'sessions'

class SessionsDB extends Dexie {
  sessions: Dexie.Table<Results, number>

  constructor () {
    super(DB_NAME)
    this.version(DB_VERSION).stores(OBJECT_STORE)
    this.sessions = this.table(DB_TABLE)
  }
}

const db = new SessionsDB()


export default function useDB() {
  const createSession = async (sessionKey: number) => {
    return await db.sessions.add([], sessionKey)
  }
  const deleteSession = async (sessionKey: number) => {
    await db.sessions.delete(sessionKey)
  }
  const updateSession = async (sessionKey: number, results: Results) => {
    await db.sessions.put(results, sessionKey)
  }

  const { getSessionLength, setSessionResults } = useSessionResults()
  const addResult = async (sessionKey: number, result: Result) => {
    await db.sessions.update(sessionKey, { [getSessionLength.value]: result })
  }
  const updateResult = async (sessionKey: number, index: number, result: Result) => {
    await db.sessions.update(sessionKey, { [index]: result })
  }

  const { setSessionHistory } = useSessionHistory()
  const fetchSession = async (sessionKey: number) => {
    return await db.sessions.get(sessionKey)
    .then((response) => {
      if (!response) return
      setSessionResults(response)
      setSessionHistory()
    })
  }

  const { getSessionsConfig } = useConfig()
  const initializeSessions = () => {
    getSessionsConfig.value.forEach(async ({ key }) => {
      await db.sessions.get(key)
      .then((response) => {
        if (response) return
        createSession(key)
      })
    })
  }

  return {
    createSession,
    deleteSession,
    updateSession,

    addResult,
    updateResult,

    fetchSession,
    initializeSessions,
  }
}