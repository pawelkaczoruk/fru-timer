import Dexie from 'dexie'

export default async function useDB() {
  const DB_NAME = 'fruTimer'
  const DB_VERSION = 1
  const OBJECT_STORE = { sessions: '++' }

  const db = new Dexie(DB_NAME)
  db.version(DB_VERSION).stores(OBJECT_STORE)
  db.open()

  const createSession = async () => {
    return await db.table('sessions').add([])
  } // result is session Key, use it to store info about sessions in localStorage
  
  const updateSession = async (sessionKey: number, index: number, result: any) => {
    await db.table('sessions').update(sessionKey, {[index]: result})
  }

  const deleteSession = async (sessionKey: number) => {
    await db.table('sessions').delete(sessionKey)
  }

  const removeResult = async (sessionKey: number, session: any) => {
    await db.table('sessions').put(session, sessionKey)
  }

  const fetchSession = async (sessionKey: number) => {
    return await db.table('sessions').get(sessionKey)
  } // returns array of results, save it in store

  return {
    createSession,
    updateSession,
    deleteSession,
    removeResult,
    fetchSession
  }
}