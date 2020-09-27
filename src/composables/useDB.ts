import Dexie from 'dexie'
import useStore from '@/composables/useStore'
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
  } // result is session Key, use it to store info about sessions in localStorage

  const updateSession = async (sessionKey: number, index: number, result: Result) => {
    await db.sessions.update(sessionKey, { [index]: result })
  }

  const deleteSession = async (sessionKey: number) => {
    await db.sessions.delete(sessionKey)
  }

  const removeResult = async (sessionKey: number, session: Array<Result>) => {
    await db.sessions.put(session, sessionKey)
  }

  const fetchSession = async (sessionKey: number) => {
    return await db.sessions.get(sessionKey)
  } // returns array of results, save it in store

  const { getSessionsConfig } = useStore()
  const initializeSessions = () => {
    getSessionsConfig.value.forEach((session) => {
      fetchSession(session.key)
        .then((response) => {
          if (!response) createSession(session.key)
        })
    })
  }

  return {
    createSession,
    updateSession,
    deleteSession,
    removeResult,
    fetchSession,
    initializeSessions
  }
}