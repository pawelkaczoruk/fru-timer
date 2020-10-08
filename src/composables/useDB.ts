import Dexie from 'dexie'

import useSessionResults from './store/useSessionResults'
import useSessionHistory from './store/useSessionHistory'
import useConfig from './store/useConfig'

import { Result } from '@/types/Timer'

const DB_NAME = 'fruTimer'
const DB_VERSION = 1
const OBJECT_STORE = { sessions: '&' }
const DB_TABLE = 'sessions'

class SessionsDB extends Dexie {
  sessions: Dexie.Table<Array<Result>, number>

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

  const { getSessionLength, setSessionResults } = useSessionResults()
  const addResult = async (sessionKey: number, result: Result) => {
    await db.sessions.update(sessionKey, { [getSessionLength.value]: result })
  }

  const removeResult = async (sessionKey: number, modifiedSession: Array<Result>) => {
    await db.sessions.put(modifiedSession, sessionKey)
  }

  const updateResult = async (sessionKey: number, index: number, result: Result) => {
    await db.sessions.update(sessionKey, { [index]: result })
  }

  const { setSessionHistory } = useSessionHistory()
  const fetchSession = async (sessionKey: number) => {
    return await db.sessions.get(sessionKey)
      .then((response) => {
        if (response) {
          setSessionResults(response)
          setSessionHistory()
        }
      })
  }

  const { getSessionsConfig } = useConfig()
  const initializeSessions = () => {
    getSessionsConfig.value.forEach(async (session) => {
      await db.sessions.get(session.key)
        .then((response) => {
          if (!response) createSession(session.key)
        })
    })
  }

  return {
    createSession,
    deleteSession,
    addResult,
    removeResult,
    updateResult,
    fetchSession,
    initializeSessions,
  }
}