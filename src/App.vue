<template>
  <router-view/>
  <p>{{ getSessionResults }}</p>

  <p>{{ getCurrentSessionKey }}</p>
  <button @click="changeSession">change session</button>
  <p>{{ getCurrentScramble }}</p>
  <button @click="newScramble">Generate scramble</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'
import useLocalStorage from './composables/useLocalStorage'
import useScrambleGenerator from './composables/useScrambleGenerator'

export default defineComponent({
  name: 'App',
  
  setup() {
    const { initializeSessions, fetchSession } = useDB()
    const { getSessionResults, getCurrentSessionKey, setCurrentSessionKey, getConfig, getCurrentScramble } = useStore()
    const { generateScramble } = useScrambleGenerator()
    initializeSessions()
    fetchSession(getCurrentSessionKey.value)

    const { setConfigLS } = useLocalStorage()
    const changeSession = () => {
      setCurrentSessionKey(getCurrentSessionKey.value === 1 ? 2 : 1) 
      setConfigLS(getConfig.value)
      generateScramble()
      fetchSession(getCurrentSessionKey.value)
    }

    generateScramble()
    const newScramble = () => { generateScramble() }

    return {
      getSessionResults,
      getCurrentSessionKey,
      changeSession,
      newScramble,
      getCurrentScramble
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
