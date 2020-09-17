import Dexie from 'dexie'

export default async function useDB() {
  const DB_NAME = 'fruTimer'
  const DB_VERSION = 1
  const OBJECT_STORE = { sessions: '++' }

  const db = new Dexie(DB_NAME)
  db.version(DB_VERSION).stores(OBJECT_STORE)
  db.open()

  const createSession = async () => {
    return await db.sessions.add([])
  } // result is session Key, use it to store info about sessions in localStorage
  
  const updateSession = async (sessionKey, index, result) => {
    await db.sessions.update(sessionKey, {[index]: result})
  }

  const deleteSession = async (sessionKey) => {
    await db.sessions.delete(sessionKey)
  }

  const removeResult = async (sessionKey, session) => {
    await db.sessions.put(session, sessionKey)
  }

  const fetchSession = async (sessionKey) => {
    return await db.sessions.get(sessionKey)
  } // returns array of results, save it in store

  return {
    createSession,
    updateSession,
    deleteSession,
    removeResult,
    fetchSession
  }
}