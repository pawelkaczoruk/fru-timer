<template>
  <router-view/>
  <p>{{ getSessionResults }}</p>

  <p>{{ getCurrentSessionKey }}</p>
  <button @click="changeSession">change session</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'
import useLocalStorage from './composables/useLocalStorage'

export default defineComponent({
  name: 'App',
  
  setup() {
    const { initializeSessions, fetchSession } = useDB()
    const { getSessionResults, getCurrentSessionKey, setCurrentSessionKey, getConfig } = useStore()
    initializeSessions()
    fetchSession(getCurrentSessionKey.value)

    const { setConfig } = useLocalStorage()
    const changeSession = () => {
      setCurrentSessionKey(getCurrentSessionKey.value === 1 ? 2 : 1) 
      setConfig(getConfig.value)
      fetchSession(getCurrentSessionKey.value)
    }

    return {
      getSessionResults,
      getCurrentSessionKey,
      changeSession
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
